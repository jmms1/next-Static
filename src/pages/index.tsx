import { GetStaticProps, NextPage } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Inter } from 'next/font/google'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts/';
import { PokemonListResponse, SmallPokemon } from '../../interfaces/';
import { PokemonCard } from '../../components/pokemon';


interface Props {
  pokemons: SmallPokemon[];
}


const inter = Inter({ subsets: ['latin'] })



export const Home: NextPage<Props> = ({pokemons}) =>  {

  return (
    <>
    <Layout title='Listado de Pokemones'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map( pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
      </Grid.Container>

    </Layout>

    </>
  )
}

function pokemonCreator(data:PokemonListResponse):SmallPokemon[]  {

  return data.results.map( (element, index) => ({
    'name': element.name,
    'url':  element.url,
    'id': index+1, 
    'img': `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
  }))

}

export const  getStaticProps: GetStaticProps =  async(context) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=200');

  const pokemons: SmallPokemon[] = pokemonCreator(data);
  

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default Home;