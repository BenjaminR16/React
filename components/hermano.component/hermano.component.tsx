

interface hermano {
    setterRandom: React.Dispatch<React.SetStateAction<number>>
}


export default function Hermano({ setterRandom }: hermano) {



    return (
        <>
            <h3>Este es el hermano que actualiza el random</h3>

            <button onClick={() => setterRandom(Math.floor(Math.random() * 100))}>
                Cambiar random
            </button>

        </>
    )

}