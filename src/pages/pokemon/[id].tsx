
import { GetStaticProps, NextPage,GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { pokeApi } from "../../../api";
import { Layout } from "../../../components/layouts"
import { Pokeresponse, PokeSmallresponse } from "../../../interfaces";
import { useState } from "react";
import { getPokemonInfo, localFavorites } from "../../../utils";
import conffeti from 'canvas-confetti'; 




interface Props {
  pokemon: PokeSmallresponse; 
}


export const PokemonPage: NextPage<Props> = ({pokemon}) => {


  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));


  const onToggleFavorite = ( ) => {

    localFavorites.toggleFavorite(pokemon.id); 
    setIsInFavorites( !isInFavorites );
    
    if(isInFavorites) return; 

    conffeti({
      zIndex: 999,
      particleCount: 100,
      spread: 180,
      angle: -100,
      origin: {
        y: 0, 
        x: 1
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card css={{padding: '30px'}} isHoverable>
            <Card.Body>
              <Card.Image
              src={pokemon.sprites?.other.dream_world.front_default || pokemon.sprites.front_default}
              alt={pokemon.name}
              width='100%'
              height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color={'gradient'}
                bordered={!isInFavorites} 
                onPress={onToggleFavorite}
                >{isInFavorites ? 'En favoritos': 'Guardar en Favoritos'}
                </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Imagenes:</Text>
              <Container direction="row" display="flex">
                <Image
                src={pokemon.sprites?.other.home.front_default|| pokemon.sprites.back_default}
                alt={pokemon.name}
                width={ 100 }
                height={ 100 }
                />
                
                <Image
                src={pokemon.sprites.front_shiny || pokemon.sprites.back_default}
                alt={pokemon.name}
                width={ 100 }
                height={ 100 }
                />
                <Image
                src={pokemon.sprites.front_female|| pokemon.sprites.back_default}
                alt={pokemon.name}
                width={ 100 }
                height={ 100 }
                />
                <Image
                src={pokemon.sprites.animated?.front_default || pokemon.sprites.back_default}
                alt={pokemon.name}
                width={ 100 }
                height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={6}>
          <Card>
            <Card.Header>Type:</Card.Header>
            <Card.Body>
              {
                pokemon?.types.map( type => (
                  <Text key={type.slot} h1 transform="capitalize">{type.type.name}</Text>
                ))
              }
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>


    </Layout>

  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here 
  const pokemons200 = [...Array(200)].map((value, index) => `${index + 1}`);
  return {
    // paths: [{ params: { id: '1'} }],
    paths: pokemons200.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const  getStaticProps: GetStaticProps =  async({params}) => {

  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id); 

  return {
    props: {
      pokemon
    }, // will be passed to the page component as props
  }
}

export default PokemonPage; 