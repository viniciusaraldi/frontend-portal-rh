import { baseUrl } from "../baseUrl";

async function requisicaoFeedbackPost(categoria, feedback) {
    console.log(categoria, feedback)
    try {
        const dadosApi = await fetch(`${baseUrl}/feedbacks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                categorias: categoria,
                feedbacks: feedback
            })
        });

        const dadosEnvio = await dadosApi?.json();
        return dadosEnvio
    } catch(err) {
        return err
    }
}

export default requisicaoFeedbackPost
