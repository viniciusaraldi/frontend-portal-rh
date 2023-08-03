import geraRequisicaoUsuario from '../../services/User/adicionarUsuario'
import ButtonSubmit from '../ButtonSubmit'
import InputUsuario from '../InputUsuario'
import './index.css'

function FormularioUsuario() {

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        try {
            localStorage.setItem("token", await geraRequisicaoUsuario(usuario, password))
            return window.location.href = "/";
        } catch (err) {
            return console.log("Erro ao tentar fazer login")
        }

    }

    return (
        <form className="formularioCadastroUsuario" onSubmit={handleSubmit}>
            <InputUsuario
                label="Usuario"
                placeholder="Digite seu usuario"
            />
            <InputUsuario
                label="Senha"
                placeholder="Digite sua senha"
            />
            <ButtonSubmit />
        </form>
    )
}

export default FormularioUsuario
