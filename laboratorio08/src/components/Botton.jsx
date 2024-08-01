
import styles from './Botton.module.css'

function BottonShow ({ onClick }) {
    return (
        <div>
            <button className={styles.Botton} onClick={onClick}>Horarios</button>
        </div>
    )
}

export default BottonShow