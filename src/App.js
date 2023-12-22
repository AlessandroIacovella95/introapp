import "./App.css";
import React from "react";
// Importo il componente Clock
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div className="App">
        <h1>My first react app</h1>
      </div>
      {/* Richiamo il componente Clock */}
      <Clock country="Chile" timezone="-6" />
    </>
  );
}

export default App;
