import React, { useState, useEffect, Children } from 'react';
import axios from 'axios';

import FlexBoxTitulo from '../../componentes/FlexBoxTitulo';
import ComponenteConteudo from '../../componentes/ComponenteConteudo';
import './index.css';
const Pokemon = () => {
  const [ConjPokemon, setConjPokemon] = useState(null);

  useEffect(() => {
    async function PegarDados() {
      const resposta = await axios.get('https://api.pokemontcg.io/v1/sets');
      setConjPokemon(resposta.data.sets);
    }
    PegarDados();
  }, []);

  if (ConjPokemon == null) {
    return <p>Carregando ...</p>;
  }

  return (
    <div className="container">
      <h1>Conjuntos de cartas de pokemons</h1>
      <div>
        {ConjPokemon.map((itens) => (
          <FlexBoxTitulo key={itens.code} nome={itens.name}>
            <ComponenteConteudo
              key={itens.code}
              img={itens.logoUrl}
              data={itens.releaseDate}
              qtd={itens.totalCards}
            ></ComponenteConteudo>
          </FlexBoxTitulo>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
