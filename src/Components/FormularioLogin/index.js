import { Link } from "react-router-dom"
import styled from "styled-components"
import geraRequisicaoUsuario from "../../services/User/loginUsuario"
import ButtonSubmit from "../ButtonSubmit"
import InputUsuario from "../InputUsuario"
import SelectRole from "../SelectRole"

function FormularioLogin() {

    const FormularioLoginStyled = styled.form`
        display: flex;
        gap: 1.5em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: 1em auto;
        padding: 1em 0;
        border: 2px solid var(--color-primary);
        border-radius: 20px;
        box-shadow: 5px 10px 0px var(--color-primary);

        h2 {
            padding: 1em;
            font-size: 1.5em;
            font-weight: lighter;
            text-transform: uppercase;
        }
        && a {
            width: 70%;
        }    

        @media screen and (min-width: 900px) {
            && {
                gap: .5em;
                padding: 0;
                margin: .5em auto;
                width: 50%;
            }
            && a {
                width: 100%;
                margin-bottom: .5em;
            }
        }
    `;

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const password = (e.target[1].value)
        const role = e.target[2].value
        localStorage.setItem("token", await geraRequisicaoUsuario(usuario, password, role))
        if (localStorage.getItem("token") === 'false') {
            return alert("Usuario ou Senhas incorretos, verifique!")
        } else {
            return window.location.href = "/";
        }
    }

    return (
        <FormularioLoginStyled onSubmit={handleSubmit}>
            <h2>Faça Login no Portal Grupo Rosa Maria</h2>
            <InputUsuario
                label="Usuario"
                placeholder="Usuario"
            />
            <InputUsuario
                label="Senha"
                placeholder="senha"
            />
            <SelectRole />
            <ButtonSubmit
                backcolor="var(--color-primary)"
                type="submit"
                valueText="Faça login"
            />                
            <Link to="/resete-password">
                <ButtonSubmit
                    type="submit"
                    valueText="Esqueceu sua Senha? Clique aqui para alterar"
            />
            </Link>
        </FormularioLoginStyled>
    )
}

export default FormularioLogin
