import styles from './Cabecalho.module.css'
import logo from '../logoUFFS.png'

function Cabecalho() {
    return (
        <div className={styles.Container}>
            <img src={logo} alt="Logo da uffs" className={styles.logoUFFS}/>
            <h1 className={styles.titulo}>Bem vindo aos horarios UFFS</h1>         
        </div>
    )
}

export default Cabecalho