import {baseUrl} from '../baseUrl.js'


async function buscaCardapioPorId(id) {
    try {
        const dados = await fetch(`${baseUrl}/cardapios/${id}`)
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch (err) {
        return err
    }

}

export default buscaCardapioPorId
