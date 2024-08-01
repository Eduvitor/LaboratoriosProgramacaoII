import BottonShow from './Botton';
import styles from './CursosSelecao.module.css'
import React from 'react';
function CursosSelecao( {onButtonClick} ) {
    return (
        <div className={styles.EstiloCursos}>
            <div>
                <h2>Ciencia da computacao</h2>
                <p><strong>Coordenadores: </strong>Giancarlo, Braulio</p>
                <p><strong>Turno:</strong> Noturno</p>
                <p><strong>Descricao:</strong> N/O/T</p>
                <BottonShow onClick={onButtonClick}></BottonShow>
            </div>
            <div>
                <h2>Historia</h2>
                <p><strong>Coordenadores:</strong> Bruno Antonio Picoli,
                Delcio Marquetti</p>
                <p><strong>Turno:</strong> Noturno</p>
                <p><strong>Descricao:</strong> N/O/T</p>
                <BottonShow onClick={onButtonClick}></BottonShow>
            </div>
            <div>
                <h2>Medicina</h2>
                <p><strong>Coordenadores:</strong> Grasiela Marcon,
                Ana Beatriz Sengik Saez</p>
                <p><strong>Turno:</strong> Integral</p>
                <p><strong>Descricao:</strong> N/O/T</p>
                <BottonShow onClick={onButtonClick}></BottonShow>
            </div>
        </div>
    );
}

export default CursosSelecao;