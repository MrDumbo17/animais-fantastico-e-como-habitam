import Container from "./components/Container";
import Animais from "./components/Animais";
import SelecAnimal from "./components/SelecAnimal";
import Ficha from "./components/Ficha";
import { useState } from "react";

//import Ficha from "./components/Ficha";
function App() {
  
  const animais = Animais()

  const [Animal, setAnimal] = useState()
    
  const found = animais.find((animal) => { return animal.Nome === Animal})

  animais.sort(function(a, b) {
    if(a.Nome < b.Nome) {
      return -1;
    } else {
      return true;
    }
  });


  return (
    <div className="App">
      <h1>Animais Fantásticos e como Habitam</h1>
      <Container>
        <SelecAnimal animais={animais} setAnimal={setAnimal}/>
        {
          found && <Ficha key={Animal} animal={found}/>
        }
      </Container>
    </div>
  );
}

export default App;
