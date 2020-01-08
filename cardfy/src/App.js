import React from "react";

import GlobalStyled from "./styles/global";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <>
      <Header />
      <Board />

      <GlobalStyled />
    </>
  );
}

export default App;
