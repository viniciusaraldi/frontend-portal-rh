import buscaRole from '../../services/Role/buscaRole.js'
import { useEffect, useState } from "react"
import './index.css'


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
        <select className='SelectCadastroUsuario'>
            {/* <option>Selecione um Cargo Para Continuar</option> */}
            {roles.map((role) => (
                <option key={role._id} value={role.role}>{role.role}</option>
            ))}
        </select>
    )

}

export default SelectRole
