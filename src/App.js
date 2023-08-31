import "./App.css";
import Logo from "./img/logo.png";
import Navbar from "./components/Navbar";

import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input.trim() === "") {
      alert("Por favor ingrese un valor");
    } else {
      try {
        setInput(evaluate(input));
      } catch (error) {
        alert("Operación incorrecta");
      }
    }
  };
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="logo-contenedor">
        <img
          src={Logo}
          className="logo-imagen"
          alt="Logo de Sebastian Macharette"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Borrar</BotonClear>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="BotonClear">
          <Boton manejarClic={calcularResultado}>=</Boton>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
