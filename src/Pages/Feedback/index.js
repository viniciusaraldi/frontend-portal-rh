import Critica from "../../Components/Critica";
import Elogio from "../../Components/Elogio";
import Sugestao from "../../Components/Sugestao";
import './index.css'

function Feedback() {
    return (
        <section className="containerFeedback">
            <Sugestao />
            <Elogio />
            <Critica />
        </section>
    )
}

export default Feedback
