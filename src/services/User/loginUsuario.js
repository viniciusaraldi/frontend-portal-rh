import { baseUrl } from '../baseUrl.js'
import buscaRole from '../Role/buscaRole.js';

async function geraRequisicaoUsuario(usuario, password, role) {

    const dadosRole = await buscaRole()
    const roleVerifica = await dadosRole

    roleVerifica.forEach( (roleDados) => {
        if (role === roleDados.role) {
            role = roleDados._id
        } else {
            return false
        }
    })

    try {
        const dados = await fetch(`${baseUrl}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: usuario,
                password: password,
                role: role
            })
        });

        if (dados.status === 404) {
            return false
        }
    
        if(dados.ok) {
            const dadosTratados = await dados.json();
            return dadosTratados.message
        } else {
            throw new Error('dados da requisição: '+ dados.ok)
        }
    } catch (err) {
        return console.log(err)
    }
    
}

export default geraRequisicaoUsuario
