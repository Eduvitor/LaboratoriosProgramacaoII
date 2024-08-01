import './App.css';
import Cabecalho from './components/Cabecalho';
import CursosSelecao from './components/CursosSelecao';
import Tabela from './components/Tabela';
import React, { useState } from 'react';


function App() {
  const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(prevShowTable => !prevShowTable);
     };
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <CursosSelecao onButtonClick={toggleTable}></CursosSelecao>
      {showTable && (
        <Tabela></Tabela>
      )}
    </div>
  );
}

export default App;
