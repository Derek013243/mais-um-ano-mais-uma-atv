import { useState } from "react"
export function App(){
  const[numero, setNumero] = useState(100)
  const[olha, setOlha] = useState(false)
  function handleAumentar(){
    setNumero (numero + 100)
  }
  function changeFalse(){
    olha === false ? setOlha(true) : setOlha(false)
    console.log(olha)
  }

  return(
    <section>
      <h1>Atv?</h1>
      <div>
        <h2>Número: {numero}</h2>
        <button onClick={handleAumentar}>Da 100</button>
        <button onClick={changeFalse}>{olha === true ? "não olha": "Olha"}</button>
        {olha === false ? "": <p>Olha</p>}
      </div>
    </section>
  )
}
