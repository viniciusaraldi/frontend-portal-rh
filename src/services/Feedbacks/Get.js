import { baseUrl } from "../baseUrl";

async function requisicaoFeedbackGet(token) {
    try {
        const dadosApi = await fetch(`${baseUrl}/feedbacks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        })
        const dadosEnvio = await dadosApi?.json();
        return dadosEnvio
    } catch(err) {
        return err
    }
}

export default requisicaoFeedbackGet
