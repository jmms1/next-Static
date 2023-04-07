import { Grid } from "@nextui-org/react"
import { FC } from 'react';
import { FavCard } from "./FavCard";


interface Props {
  favoritesPokemons : number[]
}


export const FavoriteCards: FC<Props> = ({favoritesPokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      favoritesPokemons.map( id => (

        <FavCard id={id}/>

      ))
    }

  </Grid.Container>
  )
}
