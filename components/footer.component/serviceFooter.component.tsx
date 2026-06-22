import location from "../../src/assets/location.png"
import call from "../../src/assets/llamar.png"

export default function ServicetFooter() {

    return (
        <>
            <div>
                <img src={location} alt="Location" />
                <p>c/ imaginaria, 23</p>
            </div>

            <div>
                <img src={call} alt="Llamar" />
                <p>12345678</p>
            </div>
        </>
    )
}