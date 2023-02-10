import styles from './AnimalIco.module.css'

function AnimalIco({Nome, event}) {

    var pathIco = './icones/' + Nome.toLowerCase().replace(/ /g,'-') + '.ico'

    return (
        <div className={styles.selecArea}>
                <img src={pathIco} alt = {Nome+' Imagem'} onClick = {(e) => event(Nome)} />
                <h3>{Nome}</h3>
                
        </div>
    )
}

export default AnimalIco