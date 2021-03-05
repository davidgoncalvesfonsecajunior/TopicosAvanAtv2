import React from 'react';
import './index.css';
const ComponenteConteudo = (props) => {
  return (
    <>
      <img className="img-rotulo" src={props.img} />

      <div className="texto">
        <hr />
        <p>Data de Lançamento: {props.data}</p>
        <hr />
        <p>Quantidade de Cartas: {props.qtd}</p>
        <hr />
      </div>
    </>
  );
};

export default ComponenteConteudo;
