
import styles from './Botton.module.css'

function BottonShow ({ onClick, cursoID}) {
    const handleClick = () => {
        console.log(cursoID);
        onClick(cursoID);
    }
    return (
        <div>
            <button className={styles.Botton} onClick={handleClick}>Horarios</button>
        </div>
    )
}

export default BottonShow