import React, { useEffect } from "react";
import { Card } from "../../components/Card";
import { Navigation } from "../../components/Navigation";
import { usePokemonCall } from "../../hooks/usePokemonCall";
import "./home.scss";

const sortArray = (arr: any) => {
  const res = arr.sort((a: any, b: any) => a.id - b.id);
  return res;
};

export const Home = () => {
  const pokemon = usePokemonCall();
  const arr = sortArray(pokemon);

  return (
    <>
      <Navigation />
      <div className="home">
        {arr && arr.length > 0
          ? arr.map((p: any, i: number) => (
              <Card
                cardKey={i}
                name={p.name}
                image={p.sprites.front_default}
                weight={p.weight}
                height={p.height}
              />
            ))
          : null}
      </div>
    </>
  );
};
