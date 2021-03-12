import React from 'react';
import './index.css';
const ComponenteConteudo = (props) => {
  return (
    <>
      <img className="img-rotulo efeito" src={props.img} />

      <div className="texto">
        <hr />
        <p className="pb">Data de Lançamento: {props.data}</p>
        <hr />
        <p className="pb">Quantidade de Cartas: {props.qtd}</p>
        <hr />
      </div>
    </>
  );
};

export default ComponenteConteudo;
