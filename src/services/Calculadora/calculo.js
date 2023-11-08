import { baseUrl } from "../baseUrl.js";

async function calculoCo() {
    try {
        const dadosApi = await fetch(`${baseUrl}/calculo`)
        const retornoApi = await dadosApi.json();
        return retornoApi;
    } catch (err) {
        return (err)
    }
}

export default calculoCo
