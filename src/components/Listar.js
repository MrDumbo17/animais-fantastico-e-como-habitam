import { useState } from "react"
import styles from "./Listar.module.css"

function Listar({Lista}) {

    const [ SelItem, setSelItem] = useState({Nome : null , Desc : null})
    
    return (
        <div className={styles.lista}>
                <ul>
                {
                    Lista.length && Lista.map((Item) => 
                        (
                            <li key={Item.Nome} className={styles.item} onClick = {(e) => {(SelItem.Nome === null || SelItem.Nome !== Item.Nome) ? setSelItem(Item) : setSelItem({Nome : null , Desc : null})}}>{Item.Nome}</li>
                        )
                    )
                }
                </ul>
                <div>
                    <h2>{SelItem.Nome}</h2>
                    <p>{SelItem.Descrição}</p>
                </div>   
        </div>
    )
}

export default Listar