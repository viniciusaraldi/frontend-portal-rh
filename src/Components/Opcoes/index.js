import { Link } from 'react-router-dom';
import Profile from '../Profile';
import './index.css';

function Opcoes() {

    const opcoes = ['Sugestao', 'Elogio', 'Critica']

    return (
        <div>
            <ul className="opcoesLista">
                {opcoes.map((opcao) => (
                    <Link to={opcao.toLowerCase()}><li key={opcao.id}>{opcao}</li></Link>
                ))}
                <Profile />
            </ul>
        </div>
    )
}

export default Opcoes
