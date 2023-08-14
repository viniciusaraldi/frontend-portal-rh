import geraRequisicaoUsuario from '../../services/User/loginUsuario.js'
import ButtonSubmit from '../ButtonSubmit/index.js'
import InputUsuario from '../InputUsuario/index.js'
import SelectRole from '../SelectRole/index.js'
import './index.css'

function Login() {

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        try {
            localStorage.setItem("token", await geraRequisicaoUsuario(usuario, password))
            alert("Feito login com sucesso!");
            return window.location.href = "/";
        } catch (err) {
            alert("Usuario ou Senhas incorretos, verifique!")
            console.log("Erro ao tentar fazer login: " + err)
            return false
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
            <SelectRole />
            <ButtonSubmit />
        </form>
    )
}

export default Login
