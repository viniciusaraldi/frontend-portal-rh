import { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonSubmit from "../../Components/ButtonSubmit";
import FeedbackEnvia from "../../Components/FeedbackEnvia";
import FeedbackMostra from "../../Components/FeedbackMostra";

const SectionFeedbackStyled = styled.section`
    display: flex;
    flex-direction: column;

    && > div {
        padding: 1em;
        background-color: var(--color-primary);
    }

    && > div  button {
        width: 100%;
    }

    .disable {
        opacity: 0;
    }
    .active {
        display: inline-block;
        opacity: 1;
    }
`;

function Feedback() {
    const [validaFeedback, setValidaFeedback] = useState(false)
    const [autorizacao, setAutorizacao] = useState(false)

    useEffect(() => {
        localStorage.getItem("token") === false || localStorage.getItem("token") === null ? setAutorizacao(false) : setAutorizacao(true)
    },[] )

    const handleAlteraVisão = () => {
        setValidaFeedback(!validaFeedback)
    }
    
    return (
       <SectionFeedbackStyled>
            {!autorizacao ? (
            <>
                <div onClick={handleAlteraVisão}>
                    <ButtonSubmit
                        type="button"
                        valueBtn="button"
                        valueText="Digite seu Feedback:"
                    />
                </div>
                <FeedbackEnvia />
            </>
            ) : (
            <>
                {!validaFeedback ? (
                    <>
                        <div onClick={handleAlteraVisão}>
                            <ButtonSubmit
                                type="button"
                                valueBtn="button"
                                valueText="Digite seu Feedback:"
                            />
                        </div>
                        <FeedbackEnvia />
                    </>
                ) : (
                    <>
                        <div onClick={handleAlteraVisão}>
                                <ButtonSubmit
                                    type="button"
                                    valueBtn="button"
                                    valueText="Feedbacks Enviados:"
                                />
                        </div>
                        <FeedbackMostra />
                    </>
                )}
                
            </>
            )}
       </SectionFeedbackStyled>
    )
}

export default Feedback