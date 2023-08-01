import Brand from "../Brand";
import Opcoes from "../Opcoes";
import './index.css'

function Header() {
    return (
        <header className="containerHeader">
            <Brand />
            <Opcoes />
        </header>
    )
}

export default Header