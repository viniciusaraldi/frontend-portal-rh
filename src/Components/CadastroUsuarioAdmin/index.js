import cadastroUsuarioAdminApi from '../../services/User/cadastroUsuario.js'
import ButtonSubmit from '../ButtonSubmit/index.js'
import InputUsuario from '../InputUsuario/index.js'
import SelectRole from '../SelectRole/index.js'
import styled from 'styled-components'

const FormularioReseteSenhaStyled = styled.form`
    width: 100%;
    background: var(--color-secondary);
    display: flex;
    height: 87vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2em 0;

    && div {
        width: 100%;
        position: relative;
    }

    && div button[type="button"] {
        position: absolute;
        top: 25px;
        right: 15px;
        padding: .5em;
        z-index: 2;
    }

    @media screen and (min-width: 800px) {
        && > label {
            width: 50%;
        }
        && div {
            width: 50%;
        }
        && select, && button {
            width: 20%;
        }
        && div button[type="button"] {
            top: 31px;
            right: 60px;
            padding: 0em;
        }
    }
`;

function CadastroUsuarioAdmin() {

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        const role = e.target[2].value
        try {
            await cadastroUsuarioAdminApi(usuario, password, role)
            return window.location.href = "/";
        } catch (err) {
            alert("Erro ao fazer cadastro, entre em contato com o TI")
            return false
        }

    }
    return (
        <FormularioReseteSenhaStyled onSubmit={handleSubmit}>
            <InputUsuario
                label="Usuario"
                placeholder="Digite seu usuario"
            />
            <InputUsuario
                label="Senha"
                placeholder="Digite sua senha"
            />
            <SelectRole />
            <ButtonSubmit 
                type="submit"
                valueText="Enviar"
                backColor="var(--color-primary)"
            />
        </FormularioReseteSenhaStyled>
    )
}

export default CadastroUsuarioAdmin
