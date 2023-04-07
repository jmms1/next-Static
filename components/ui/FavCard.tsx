import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from 'react';

interface Props {
    id : number
}


export const FavCard: FC<Props> = ({id}) => {

    const router = useRouter();

    const onFavoriteClick = () =>{

        router.push(`/pokemon/${id}`)

    }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
    <Card isHoverable isPressable css={{padding: 10}} onClick={onFavoriteClick} >
        
      <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      width={'100%'}
      height={'140px'}
      />
    </Card>

  </Grid>
  )
}
