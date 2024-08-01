import BottonShow from './Botton';
import styles from './CursosSelecao.module.css'
import React from 'react';



function CursosSelecao( {cursos, onButtonClick} ) {
    return (
        <div className={styles.EstiloCursos}>
            {cursos.map(curso => (
                <div key={curso.id} className={styles.dadosCursos}>
                    <h2>{curso.nome_curso}</h2>
                    <p><strong>Coordenadores: </strong>{curso.coordenadores}</p>
                    <p><strong>Turno: </strong>{curso.turno}</p>
                    <p><strong>Semestre: </strong>{curso.semestre}</p>
                    <p><strong>Descricao: </strong>{curso.descricao}</p>
                    <BottonShow onClick = {onButtonClick} cursoID={curso.id} ></BottonShow>
                </div>
            ))}
        </div>
    );
}

export default CursosSelecao;