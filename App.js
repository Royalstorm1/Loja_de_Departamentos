import React from 'react';
import Loja from "./src/components/loja.screen";

export default function App() {
  const loja = {
  	imagem: require("./assets/lojadedepartamentos.png"),
  	nome: "Loja de Departamentos",
  	descricao: "Está loja tem diversas coisas, como TUDO O QUE VOCÊ PRECISAR."
  };


  return <Loja loja={loja} />
}
