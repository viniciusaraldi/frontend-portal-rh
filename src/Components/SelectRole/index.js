import buscaRole from '../../services/Role/buscaRole.js'
import { useEffect, useState } from "react"
import styled from "styled-components"

const SelectStyled = styled.select`
    width: 60%;
    padding: 1em;
    border-radius: 20px;
    margin: 2em 0;
    color: var(--color-thirty);
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid var(--color-primary);

    @media screen and (min-width: 800px) {
            && {
                width: 40%;
                cursor: pointer;
                margin: 1em 0;
            }
        }
`;

function SelectRole() {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        geraBuscaRole()
    }, [])

    async function geraBuscaRole() {
        const dados = await buscaRole()
        setRoles(await dados)
    }

    return (
        <SelectStyled>
            {roles.map((role) => (
                <option key={role._id} value={role.role}>{role.role}</option>
            ))}
        </SelectStyled>
    )

}

export default SelectRole
