import './App.css';
import Cabecalho from './components/Cabecalho';
import CursosSelecao from './components/CursosSelecao';
import Tabela from './components/Tabela';
import React, { useState, useEffect } from 'react';


function App() {
    const [showTable, setShowTable] = useState(false);

    const [cursos, setCursos] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [filteredHorarios, setFilteredHorarios] = useState([]);
     useEffect(() => {
       const fetchCursos = async () => {
         try {
           const response = await fetch('http://localhost:3301/cursos');
           if (!response.ok) {
             throw new Error('Erro na requisição');
           }
           const data = await response.json();
           setCursos(data);
           console.log(response);
         } catch (error) {
           console.error('Erro ao buscar dados:', error);
         }
       };
       fetchCursos();
     }, []);
     
    useEffect(() => {
      const fetchHorarios = async () => {
        try {
          const response = await fetch('http://localhost:3301/ccrs');
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
          const data = await response.json();
          setHorarios(data);
          console.log(response);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      }; 
      fetchHorarios();
     }, []);

    const toggleTable = async (cursoID) => { //recebe o cursoID como parametro para identificar qual os horarios que vai ter que preencher
      console.log(horarios);
      const horariosCurso =  horarios.filter(horarios => horarios.curso_id == cursoID);
      console.log(horariosCurso);
      setFilteredHorarios(horariosCurso);
      setShowTable(prevShowTable => !prevShowTable);
   };

  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <CursosSelecao cursos={cursos} onButtonClick={toggleTable}></CursosSelecao>
      {showTable && filteredHorarios && (
        <Tabela horarios={filteredHorarios}></Tabela>
      )}
    </div>
  );
}

export default App;
