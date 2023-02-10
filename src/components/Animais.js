import { useEffect, useState } from "react";

function Animais(){
    
    const [animais, setAnimais] = useState([])

    useEffect(() => {
        fetch("./arq/animais.json")
            .then(res => res.json())
            .then(res => setAnimais(res))
    })
    console.log()
    return animais

}

export default Animais