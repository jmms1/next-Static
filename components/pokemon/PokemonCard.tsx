import { FC, MouseEventHandler } from "react"
import { SmallPokemon } from "../../interfaces"
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from "next/router";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {
  
  const router = useRouter();


  const onPokemonClick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} >
        <Card isHoverable variant="bordered" isPressable
         onClick={onPokemonClick}
          >
            <Card.Body css={{p: 1}}>
            <Card.Image 
                src={pokemon.img}
                alt='pokemon'
                width="100%"
                height={ 140 }/>
            </Card.Body>
            <Card.Footer>
            <Row justify='space-between'>
            <Text>#{pokemon.id}</Text>
            <Text transform='capitalize'>{pokemon.name}</Text>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
