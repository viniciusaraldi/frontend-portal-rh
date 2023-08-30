import { Link } from 'react-router-dom'
import geraRequisicaoUsuario from '../../services/User/loginUsuario.js'
import ButtonSubmit from '../../Components/ButtonSubmit/index.js'
import InputUsuario from '../../Components/InputUsuario/index.js'
import SelectRole from '../../Components/SelectRole/index.js'
import './index.css'

function Login() {

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        const role = e.target[2].value
        localStorage.setItem("token", await geraRequisicaoUsuario(usuario, password, role))
        if (localStorage.getItem("token") === 'false') {
            return alert("Usuario ou Senhas incorretos, verifique!")
        } else {
            try {
                alert("Feito login com sucesso!");
                return window.location.href = "/";
            } catch (err) {
                console.log(err)
                return false
            }
        }
    }

    return (
        <div className='containerFormulario'>
            <form className="formularioCadastroUsuario" onSubmit={handleSubmit}>
                <h2 className='tituloLogin'>Login</h2>
                <InputUsuario
                    label="Usuario"
                    placeholder="Digite seu usuario"
                />
                <InputUsuario
                    label="Senha"
                    placeholder="Digite sua senha"
                />
                <SelectRole />
                <Link to="/resete-password" className='linkReseteSenha'>
                    <ButtonSubmit
                        type="submit"
                        valueText="Esqueceu sua Senha? Clique aqui para alterar"
                    />
                </Link>
                <ButtonSubmit 
                    type="submit"
                    valueText="Login"
                />
            </form>
        </div>
    )
}

export default Login
