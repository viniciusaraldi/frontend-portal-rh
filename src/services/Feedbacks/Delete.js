import { baseUrl } from "../baseUrl";

async function requisicaoFeedbackDelete (token, id) {
    try {
        const dadosApi = await fetch(`${baseUrl}/feedbacks/${id}`, {
            method: "DELETE",
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

export default requisicaoFeedbackDelete
