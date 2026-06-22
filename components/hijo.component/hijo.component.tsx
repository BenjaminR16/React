import { useState } from "react"
import Hermano from "../hermano.component/hermano.component"
import "./hijo.css" //esta es la importacion del css 

interface hijo {
    nombramos: string //nombre debe coincidir con variable y tipamos 
    setName: React.Dispatch<React.SetStateAction<string>>
}


export default function Hijo({ nombramos, setName }: hijo) {

    const [hijo, setHijo] = useState("hijo")

    const [random, setRandom] = useState(() => Math.floor(Math.random() * 100))

    return (
        <>
            <div className="form">
                <p>{random}</p>
                <h1 className="titulo">Hijo caambia de letra</h1>
                <h2>El nombre del hijo es: {nombramos}</h2>

                <button
                    onClick={() =>
                        setName(nombramos + "a") /* Aqui usamos la variable pasada por el padre al hijo */
                    }
                >
                    Agregar A
                </button>


                <h2>{hijo}</h2>
                <button
                    onClick={() =>
                        setHijo(hijo + "B") /* aqui usamos la variable directamente creada en el hijo (aqui) */
                    }
                >
                    Agregar B al hijo
                </button>
            </div>

            <Hermano setterRandom={setRandom} />
        </>
    )
}