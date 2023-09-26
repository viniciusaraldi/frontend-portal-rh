import { baseUrl } from "../baseUrl";

async function requisicaoNovidadesGet() {
    try {
        const dadosApi = await fetch(`${baseUrl}/novidades`);
        const dadosEnvio = await dadosApi.json();
        return dadosEnvio
    } catch(err) {
        return err
    }
}


export default requisicaoNovidadesGet
