import React from 'react';
import './Flex.css';

const FlexBoxTitulo = (props) => {
  return (
    <>
      <h2 className="titulo">Conjunto: {props.nome}</h2>
      <div>{props.children}</div>
    </>
  );
};

export default FlexBoxTitulo;
