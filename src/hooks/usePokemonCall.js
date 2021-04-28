import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemonCall = () => {
  const [response, setResponse] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=8"
        );
        if (res && res.data) {
          setResponse(res.data.results);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (response && response.length) {
        response.forEach(async (el) => {
          try {
            const res = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${el.name}`
            );
            setPokemon((d) => [...d, res.data]);
          } catch (e) {
            console.log(e);
          }
        });
      }
    };
    fetchPokemon();
  }, [response]);

  return pokemon;
};
