import { Link } from 'react-router-dom'
import HomeCanal from '../../Components/HomeCanal';


function OpcoesHome(props) {
    return (
        <Link to={props.to}>
            <HomeCanal
                backgroundimage={props.image}
                titulo = {props.text}
            />
        </Link>

    )
}

export default OpcoesHome