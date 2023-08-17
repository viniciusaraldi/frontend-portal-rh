import { Link } from 'react-router-dom';
import Profile from '../Profile';
import './index.css';

function Opcoes() {

    const opcoes = ['Feedback', 'Natura']

    return (
        <div>
            <ul className="opcoesLista">
                {opcoes.map((opcao) => (
                    <Link to={opcao.toLowerCase()} key={opcoes.indexOf(opcao)}><li key={opcoes.indexOf(opcao)}>{opcao}</li></Link>
                ))}
                <Profile />
            </ul>
        </div>
    )
}

export default Opcoes
