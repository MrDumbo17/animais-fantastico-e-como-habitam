import styles from './Ficha.module.css'
import Listar from './Listar'

function Ficha ({animal}) {

    function calcStat(status) {
        status -= 10
        var result = 0
        status > 0 ? ( result = '+' + Math.floor((status)/2).toString()) : ( result = Math.ceil((status)/2))
        return result
    }

    return (
        <div className={styles.ficha}>
            <h1>{animal.Nome}</h1>
            <section className={styles.secinfo}>
                <p><span>PV</span> {animal.PV}</p>
                <p><span>CA</span> {animal.CA}</p>
                <p><span>Deslocamento</span> {animal.Deslocamento}</p>
            </section>
            <section className={styles.status}>
                <div>
                    <p><span>FOR</span></p>
                    <p>{animal.FOR} </p><p> ({calcStat(animal.FOR)})</p>
                </div>
                <div>
                    <p><span>DES</span></p>
                    <p>{animal.DES} </p><p> ({calcStat(animal.DES)})</p>
                </div>
                <div>
                    <p><span>CON</span></p>
                    <p>{animal.CON} </p><p> ({calcStat(animal.CON)})</p>
                </div>
                <div>
                    <p><span>INT</span></p>
                    <p>{animal.INT} </p><p> ({calcStat(animal.INT)})</p>
                </div>
                <div>
                    <p><span>SAB</span></p>
                    <p>{animal.SAB} </p><p> ({calcStat(animal.SAB)})</p>
                </div>
                <div>
                    <p><span>CAR</span></p>
                    <p>{animal.CAR} </p><p> ({calcStat(animal.CAR)})</p>
                </div>
            </section>
            <section className={styles.desc}>
                <div>
                    <span>Perícias:</span>
                    <p> {animal.Perícias}</p>
                </div>
                <p><span>Sentidos:</span> {animal.Sentido}</p>
                <p><span>Idiomas:</span> {animal.Idiomas}</p>
                <p><span>Nível de Desafio:</span> {animal.Nível}</p>
            </section>
            <section>
                <h4>Skills</h4>
                <Listar Lista={animal.Skils}/>
            </section>
            <section>
                <h4>Ações</h4>
                <Listar Lista={animal.Ações}/>
            </section>
        </div>
    )
}

export default Ficha