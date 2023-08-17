import ButtonSubmit from "../../Components/ButtonSubmit"
import InputUsuario from "../../Components/InputUsuario"
import SelectRole from "../../Components/SelectRole"
import reseteSenha from "../../services/User/reseteSenha.js"
import buscaRole from "../../services/Role/buscaRole.js"

function ResetaSenhaUsuario() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const usuario = e.target[0].value
        const newPassword = e.target[1].value
        const roleVerifica = e.target[3].value
        const roleApi = await buscaRole()
        const idRole = roleApi.find((e) => e.role === roleVerifica)
        const dados = await reseteSenha(usuario, idRole, newPassword)
        if (dados === true) {
            return window.location.href = '/login'
        }
        console.log(dados)
        return dados
    }
    
    return (
        <form className="formularioCadastroUsuario" onSubmit={handleSubmit}>
            <InputUsuario
                label="Usuario"
                placeholder="Digite seu usuario"
            />
            <InputUsuario
                label="Nova Senha"
                placeholder="Digite sua nova senha"
            />
            <InputUsuario
                label="Digite Novamente Sua Senha"
                placeholder="Digite Novamente Sua Senha"
            />
            <SelectRole
                label="Cargo"
            />
            <ButtonSubmit
                type="submit"
                valueText="Enviar"
            />
        </form>
    )
}

export default ResetaSenhaUsuario
