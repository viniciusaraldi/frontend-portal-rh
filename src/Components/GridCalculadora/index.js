import { useEffect, useState } from 'react';
import styled from 'styled-components';
import colaboradores from '../../services/Calculadora/colaboradores.js';
import deletaColaborador from '../../services/Calculadora/deletaColaborador.js';

const TableStyled = styled.table`
    width: 80%;
    text-align: center;
    border-collapse: collapse;
    margin: 0 auto;
    position: relative;

    th {
        border: 1px solid #dddddd;
        padding: 8px;
        background: #dddddd;
    }

    td {
        border: 1px solid #dddddd;
        background: var(--color-secondary);
        text-align: center;
        padding: 8px;
        position: relative;
    }

    .userDelete {
        position: absolute;
        right: 3%;
        top: 0;
        margin: 3px 0;
        padding: 0.5em;
        border: 20px;
        border-radius: 20px;
        background: red;
        color: white;
        font-weight: bold;
        cursor: pointer;
        width: 50px;
    }
`;

function GridCalculadora() {
    const [colaborador, setColaborador] = useState([])

    useEffect(() => {
        recebeApi()
    }, [])

    async function recebeApi() {
        const info = await colaboradores()
        setColaborador(info)
    }

    const handleClickDelete = async e => {
        console.log(e.target.dataset.iduser)
        if (e.target.dataset.iduser !== undefined) {
            await deletaColaborador(e.target.dataset.iduser)
            setColaborador(colaborador.filter((dado) => dado._id !== e.target.dataset.iduser))
            return window.location.href = "/calculadora"
        }
    }

    return (
        <TableStyled>
            <thead>
                <tr>
                    <th>#Colaborador</th>
                    <th>#Setor</th>
                    <th>#Copos Reutilizados</th>
                </tr>
            </thead>
            <tbody>
                {colaborador.lenght === 0 || colaborador === "Not Found" ? (
                    <tr>
                        <td>Nenhum dado informado!</td>
                    </tr>
                ) : colaborador.map((dado) => (
                    <tr key={dado._id}>
                        <td>{dado.nome}</td>
                        <td>{dado.setor}</td>
                        <td>{dado.qtdeCopo}<button onClick={handleClickDelete} className='userDelete' data-iduser={dado._id}>X</button></td>
                    </tr>
                ))
                }

                
            </tbody>

        </TableStyled>
    )
}

export default GridCalculadora
