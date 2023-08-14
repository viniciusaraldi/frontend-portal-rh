import cadastroUsuarioAdminApi from '../../services/User/cadastroUsuario.js'
import ButtonSubmit from '../ButtonSubmit/index.js'
import InputUsuario from '../InputUsuario/index.js'
import SelectRole from '../SelectRole/index.js'

function CadastroUsuarioAdmin() {

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        const role = e.target[2].value
        try {
            await cadastroUsuarioAdminApi(usuario, password, role)
            alert("Feito Cadastro com sucesso!");
            return window.location.href = "/";
        } catch (err) {
            alert("Erro ao fazer cadastro, entre em contato com o TI")
            console.log("Erro ao cadastrar: " + err)
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

export default CadastroUsuarioAdmin
