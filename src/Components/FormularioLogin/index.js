import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import geraRequisicaoUsuario from "../../services/User/loginUsuario"
import ButtonSubmit from "../ButtonSubmit"
import InputUsuario from "../InputUsuario"
import SelectRole from "../SelectRole"

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
    position: relative;
    background-color: var(--color-secondary);

    && h2 {
        padding: 1em;
        font-size: 1.5em;
        font-weight: lighter;
        text-transform: uppercase;
    }
    && a {
        width: 70%;
    }    

    && > div {
        width: 100%;
        position: relative;
    }
    && > div > button {
        position: absolute;
        top: 32px;
        right: 10px;
    }
    #error-input {
        background: transparent;
        border: none;
        height: 1px;
        position: absolute;
        color: transparent;
    }

    @media screen and (min-width: 800px) {
        && {
            gap: .5em;
            padding: 0;
            margin: .5em auto;
            width: 40%;
            height: 83vh;
        }
        && a {
            width: 100%;
            margin-bottom: .5em;
        }
        && > div > button {
            width: auto;
            border: 1px solid transparent;
            top: 18px;
            right: 50px;
        }
    }

    @media screen and (min-width: 1400px) {
        && {
           justify-content: space-evenly;
           height: 88vh;
        }
        && > div > button {
            top: 27px;
            right: 120px;
            padding: .5em;
        }
    }
`;

function FormularioLogin() {
    const [passwordUser, setPasswordUser] = useState('')
    const [typeInput, setTypeInput] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const usuario = (e.target[0].value)
        const role = e.target[3].value
        const inputError = e.target[4]
        localStorage.setItem("token", await geraRequisicaoUsuario(usuario, passwordUser, role))
        if (localStorage.getItem("token") === 'false' || localStorage.getItem("token") === undefined) {
            inputError.setCustomValidity('Usuario ou Senha incorretos, verifique!');
            inputError.reportValidity();
        } else {
            return window.location.href = "/";
        }
    }

    const handleAdicionaSenha = e => {
        setPasswordUser(e.target.value)
    }

    const handleMostraSenha = () => {
        setTypeInput(!typeInput)
    }

    return (
        <FormularioLoginStyled onSubmit={handleSubmit}>
            <h2>Faça Login no Portal Grupo Rosa Maria</h2>
            <InputUsuario
                label="Usuario"
                placeholder="USUARIO"
            />
            <div onChange={handleAdicionaSenha} onClick={handleMostraSenha}>
                <InputUsuario
                    label="Senha"
                    placeholder="SENHA"
                    type={typeInput ? "password" : "text"}
                />
                <ButtonSubmit
                    type="button"
                    backcolor="transparent"
                    borderValue="none"
                    paddingValue="0"
                    valueText={<i className="fa-regular fa-eye-slash"></i>}
                />
            </div>

            <SelectRole />
            <input type="text" id="error-input" />
            <ButtonSubmit
                backcolor="var(--color-primary)"
                type="submit"
                valueText="Faça login"
            />                
            <Link to="/resete-password">
                <ButtonSubmit
                    type="submit"
                    valueText="Esqueceu sua Senha? Clique aqui para alterar"
                    paddingValue='1em'
            />
            </Link>
        </FormularioLoginStyled>
    )
}

export default FormularioLogin
