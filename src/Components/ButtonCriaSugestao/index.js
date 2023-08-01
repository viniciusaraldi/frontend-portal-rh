import { Link } from 'react-router-dom';
import './index.css'

function ButtonCriaSugestao(props) {
    return(
        <Link to={`/cria-${props.redireciona}`}>
            <button className='buttonCriaSugestao'>
                <i class="fa-solid fa-plus"></i>
            </button>
        </Link>
    )
}

export default ButtonCriaSugestao;
