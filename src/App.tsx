// import { useState } from 'react'
import Header from "../components/headers.componets/header.component"
import Footer from "../components/footer.component/footer.component"
import Hijo from "../components/hijo.component/hijo.component"
import './App.css'
import { useState } from "react"

function App() {
  const [nombre, setNombre] = useState("Benjamin")

  // eslint-disable-next-line react-hooks/purity
  const random = Math.floor(Math.random() * 100)

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <h1>{nombre}</h1>   {/* el hijo altera el componente del padre con el button */}
        <p>numero: {random}</p>

        {/* //primera forma de psar valores al hijo */}
        <Hijo nombramos={nombre} setName={setNombre} />  {/* el nombre de la variable puede ser igual nombramos puiede ser nombre*/}

        {/* segunda forma de pasar valores al hijo
         <Hijo></Hijo>  */}

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
