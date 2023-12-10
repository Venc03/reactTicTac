import Jatekter from "./komponens/Jatekter.js";
import './App.css';
import TictactoeModel from "./Model/TictactoeModel.js";
import { useState } from "react";
const TMODEL = new TictactoeModel();
function App() {
  const [lista,setLista] = useState([...TMODEL.getLista()]);
  function katt(index) {
    console.log(index);
    TMODEL.setLista(index);
    setLista([...TMODEL.getLista()]);
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
      <Jatekter katt={katt} lista={lista}/>
      </article>
    </div>
  );
}

export default App;
