import { Link } from 'react-router-dom'
import './index.css'

function Home() {
    return (
        <section className='containerHome'>
             <Link to="/feedback" className='containerHomeAtencao'>
                <h2>Deixe seu feedback conosco!</h2>
            </Link>
            <Link to="/natura" className='containerHomeAtencao'>
                <h2>Consulte nosso cardápio semanal</h2>
            </Link>
        </section>
    )
}

export default Home
