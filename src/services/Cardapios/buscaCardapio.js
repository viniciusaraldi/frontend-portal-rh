import {baseUrl} from '../baseUrl.js'


async function buscaCardapio() {
    try {
        const dados = await fetch(`${baseUrl}/cardapios`)
        const dadosEnvio = await dados.json()
        return dadosEnvio
    } catch (err) {
        return err
    }

}

export default buscaCardapio
