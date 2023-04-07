

import React, { useState } from 'react'
import { Layout } from '../../../components/layouts'
import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { FavoriteCards, NoFavorites } from '../../../components/ui'
import { useEffect } from 'react';
import { localFavorites } from '../../../utils';


const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);


  useEffect(() => {
    
    setFavoritesPokemons( localFavorites.pokemons );

  }, [])
  






  return (
    <Layout title='Favoritos'>

      {
        favoritesPokemons.length === 0
        ? (<NoFavorites/>)
        : ( <FavoriteCards favoritesPokemons={favoritesPokemons} /> )
      }

      

    </Layout>
  )
}

export default FavoritesPage