import "./App.css";
import React from "react";
// Importo il componente Clock
import Clock from "./Clock";

function App() {
  return (
    <>
      <div className="App">
        <h1>Digital Clock</h1>
      </div>
      {/* Richiamo il componente Clock */}
      <Clock country="Chile" timezone="0" />
    </>
  );
}

export default App;
