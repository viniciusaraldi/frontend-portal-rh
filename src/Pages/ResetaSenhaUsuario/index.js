import ButtonSubmit from "../../Components/ButtonSubmit"
import InputUsuario from "../../Components/InputUsuario"
import SelectRole from "../../Components/SelectRole"
import reseteSenha from "../../services/User/reseteSenha.js"
import buscaRole from "../../services/Role/buscaRole.js"
import styled from "styled-components"
import { useState } from "react"

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
        top: 16px;
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

function ResetaSenhaUsuario() {
    const [senhaNova, setSenhaNova] = useState("")
    const [senhaNovaSegunda, setSenhaNovaSegunda] = useState("")
    const [senhaVisivel, setSenhaVisivel] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const usuario = e.target[0].value
        const roleVerifica = e.target[5].value
        const inputError = e.target[3]
        if (senhaNova === senhaNovaSegunda) {
            const roleApi = await buscaRole()
            const idRole = roleApi.find((e) => e.role === roleVerifica)
            const dados = await reseteSenha(usuario, idRole, senhaNova)
            if (dados === true) {
                return window.location.href = '/login'
            }
            return dados
        } else {
            inputError.setCustomValidity('Usuario ou Senha incorretos, verifique!');
            inputError.reportValidity();
        }
       
    }

    const handleAdicionaSenha = e => {
        const tipo = (e.target.dataset.typebtn)
        if (tipo === 'nova-senha') {
            setSenhaNova(e.target.value)
        } else {
            setSenhaNovaSegunda(e.target.value)
        }
    }

    const handleMostraSenha = e => {
        if (e.target.dataset.valuebtn === 'visivel') {
            setSenhaVisivel(!senhaVisivel)
        }
    }
    
    return (
        <FormularioReseteSenhaStyled onSubmit={handleSubmit}>
            <InputUsuario
                label="Usuario"
                placeholder="Digite seu usuario"
            />
            <div onChange={handleAdicionaSenha} onClick={handleMostraSenha}>
                <InputUsuario
                    typeBtn="nova-senha"
                    type={senhaVisivel ? 'type' : 'password'}
                    label="Nova Senha"
                    placeholder="Digite sua nova senha"
                />
                <ButtonSubmit
                    type="button"
                    backcolor="transparent"
                    borderValue="transparent"
                    paddingValue="0"
                    valueBtn="visivel"
                    valueText={<i data-valuebtn="visivel" className="fa-regular fa-eye-slash"></i>}
                />
            </div>
            <div onChange={handleAdicionaSenha} onClick={handleMostraSenha}>
                <InputUsuario
                    typeBtn="nova-senha2"
                    type={senhaVisivel ? 'type' : 'password'}
                    label="Digite Novamente Sua Senha"
                    placeholder="Digite Novamente Sua Senha"
                />
                <ButtonSubmit
                    type="button"
                    backcolor="transparent"
                    borderValue="transparent"
                    paddingValue="0"
                    valueBtn="visivel"
                    valueText={<i data-valuebtn="visivel" className="fa-regular fa-eye-slash"></i>}
                />
            </div>
            <SelectRole />
            <ButtonSubmit
                backcolor="var(--color-primary)"
                borderColor="var(--color-primary)"
                type="submit"
                valueText="Enviar"
            />
        </FormularioReseteSenhaStyled>
    )
}

export default ResetaSenhaUsuario
