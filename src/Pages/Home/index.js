import CardDiaSemanaNatura from '../../Components/CardDiaSemanaNatura'
import './index.css'

function Home() {
    return (
        <section className='containerHome'>
            <CardDiaSemanaNatura 
                diaSemanal="Segunda-feira"
            />
            <CardDiaSemanaNatura 
                diaSemanal="Terça-feira"
            />
            <CardDiaSemanaNatura 
                diaSemanal="Quarta-feira"
            />
            <CardDiaSemanaNatura 
                diaSemanal="Quinta-feira"
            />
            <CardDiaSemanaNatura 
                diaSemanal="Sexta-feira"
            />
        </section>
    )
}

export default Home
