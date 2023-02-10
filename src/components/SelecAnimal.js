import styles from './SelecAnimal.module.css'
import AnimalIco from './AnimalIco.js'

function SelecAnimal({animais, setAnimal}) {


    return (
        <div className={styles.selecArea}>
            {animais.length && animais.map((animal) => 
                (
                    <AnimalIco key={animal.Nome} Nome={animal.Nome} event={setAnimal}/>
                )
            )}
        </div>
    )
}

export default SelecAnimal