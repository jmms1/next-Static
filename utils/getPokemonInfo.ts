import { pokeApi } from "../api";
import { Pokeresponse } from "../interfaces";


export const getPokemonInfo = async ( nameOrId: string ) => {


    const { data } = await pokeApi.get<Pokeresponse>(`/pokemon/${nameOrId}`);
  
    return {
      id: data.id,
      is_default: data.is_default,
      location_area_encounters: data.location_area_encounters,
      name: data.name,
      species: data.species,
      sprites: data.sprites,
      types: data.types,
    }


}