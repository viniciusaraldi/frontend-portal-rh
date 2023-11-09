import { useEffect, useState } from 'react';
import styled from 'styled-components';
import atualizaColaborador from '../../services/Calculadora/atualizaCalculadora.js';
import colaboradores from '../../services/Calculadora/colaboradores.js';
import colaboradoresPorId from '../../services/Calculadora/colaboradorId.js';
import formColaborador from '../../services/Calculadora/formColaborador.js';
import ButtonSubmit from '../ButtonSubmit';
import Input from '../Input';

const FormsStyled = styled.form`
    width: 80%;
    margin: 1em auto;
    padding: 1em;
    background-color: var(--color-secondary);
    display: flex;
    align-items: center;

    && label {
        width: 80%;
        padding: 0 1em;
        position: relative;
    }

    && label > input:not(:disabled) {
        width: 130%;
        border-radius: 20px;
        padding: 1em;
        border: 1px solid var(--color-thirty);
    }
    #setor {
        width: 50%;
        margin-left: 180px;
    }

    #contagem {
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 20px;
        border: 2px solid #c6c6c6;
    }
    label.contagem {
        width: auto;
    }
    .buttonContagem {
        background: none;
        border: none;
        cursor: pointer;
    }
    .buttonContagem > i.fa-circle-plus {
        font-size: 3em;
        color: green;
    }
    .buttonContagem > i.fa-minus {
        font-size: 2.5em;
        border-radius: 50px;
        color: var(--color-secondary);
        background-color: red;
        padding: .2em;
    }

    && label > button[data-idusuario] {
        height: 50%;
        width: 41%;
        position: absolute;
        bottom: -32px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        && {
            width: 90%;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: flex-start;
        }
        && label {
            padding: .5em;
        }
        #setor {
            width: 130%;
            margin-left: auto;
        }  
    }
`;

const DivButtonCountStyled = styled.div`
    display: flex;
    margin: 0 5em;

    @media screen and (max-width: 500px) {
        && {
            margin: 0 auto;
            display: flex;
            align-items: center;    
        }
    }
`;

const DivFormsStyled = styled.div`
    position: absolute;
    display: {props.atualiza};
    left: 10%;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    && button {
        margin: 0.2em 0;
        padding: 1em;
        border: 20px;
        width: 100%;
        cursor: pointer;
        border: 1px solid #c6c6c6;
    }

    @media screen and (max-width: 500px) {

    }
`;

function FormularioCalculadora() {
    const [count, setCount] = useState(0)
    const [idUser, setIdUser] = useState("")
    const [nome, setNome] = useState('')
    const [setor, setSetor] = useState('')
    const [infoColaborador, setInfoColaborador] = useState([])
    const [resultado, setResultado] = useState([])
    const [atualiza, setAtualiza] = useState(false)

    useEffect(() => {
        requisicaoColaboradores()
    }, [])

    async function requisicaoColaboradores() {
        setInfoColaborador(await colaboradores())
    }

    const handleClickButtonCount = () => {
        setCount(count + 1)
    }

    const handleClickButtonCountMenos = () => {
        setCount(count - 1)
    }

    const handleFormsColaborador = async e => {
        e.preventDefault();
        if (atualiza === false) {
            await formColaborador(nome,setor,count);
            return window.location.href= "/calculadora";   
        } else {
            await atualizaColaborador(idUser, count)
            return window.location.href = "/calculadora";
        }
    }

    const handleChangeNome = e => {
        setNome(e.target.value)
        if (infoColaborador.length === 0 || infoColaborador === "Not Found") {
            return false
        } else {
            const resultadoPesquisa = infoColaborador.filter(info => info.nome.includes(nome))
            setResultado(resultadoPesquisa)
        }

    }

    const handleChangeSetor = e => {
        setSetor(e.target.value)
    }

    const handleClickBuscaColaborador = async (e) => {
        const infosApi = await colaboradoresPorId(e.target.dataset.idusuario)
        if (infosApi._id !== undefined) {
            setAtualiza(true)
            setIdUser(infosApi._id)
            document.getElementById("colaborador").value = infosApi.nome === undefined ? '' : infosApi.nome
            setNome(document.getElementById("colaborador").value)
            document.getElementById("setor").value = infosApi.setor === undefined ? '' : infosApi.setor
            setSetor(document.getElementById("setor").value)
        } else {
            setAtualiza(false)
        }
        
    }

    return (
        <FormsStyled onSubmit={handleFormsColaborador}>
            <label htmlFor='colaborador' onChange={handleChangeNome} onClick={handleClickBuscaColaborador}>
                <Input
                    placeholder='Digite seu nome e Sobrenome...'
                    id='colaborador'
                    name='colaborador'
                    type="text"
                    required="required"
                />
                <DivFormsStyled style={{display: atualiza !== false ? 'none' : 'flex'}}>
                    {resultado.map((info) => (
                        <button type='button' data-idusuario={info._id} key={info._id}>
                            {info.nome}
                        </button>
                    ))}
                </DivFormsStyled>                
            </label>
            <label htmlFor='setor' onChange={handleChangeSetor}>
                <Input 
                    type="text"
                    placeholder='Digite seu Setor...'
                    id='setor'
                    name='setor'
                    required='required'
                />
            </label>
            <DivButtonCountStyled>
                <button type='button' className='buttonContagem' onClick={handleClickButtonCount}><i className="fa-solid fa-circle-plus"></i></button>
                <label htmlFor='contagem' className='contagem'>
                    <Input 
                        type="number"
                        placeholder=""
                        id="contagem"
                        name="contagem"
                        disabled="disabled"
                        value={count}
                    />
                </label>
                <button type='button' className='buttonContagem' onClick={handleClickButtonCountMenos}><i className="fa-solid fa-minus"></i></button>
            </DivButtonCountStyled>

            <ButtonSubmit 
                valueText="Confirmar"
                type="submit"
                backcolor="#4BB543"
                marginValue="0 auto"
            />
        </FormsStyled>
    )
}

export default FormularioCalculadora
