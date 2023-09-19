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
    && > div  button[data-valuebtn="button"] {
        width: 96%;
    }
    .disable {
        opacity: 0;
    }
    .active {
        display: inline-block;
        opacity: 1;
    }

        @media screen and (min-width: 800px) {
            && > div {
                display: flex;
                justify-content: space-between;
            }
            && > div  button[data-valuebtn="button"] {
                width: 30%;
                font-size: 2em;
                text-align: center
            }
    }
`;

function Feedback() {
    const [validaFeedback, setValidaFeedback] = useState(false)
    const [autorizacao, setAutorizacao] = useState(false)

    useEffect(() => {
        localStorage.getItem("token") === 'false' || localStorage.getItem("token") === null ? setAutorizacao(false) : setAutorizacao(true)
    },[] )

    const handleAlteraVisão = (e) => {
        if (e.target.type === 'button') {
            setValidaFeedback(!validaFeedback)
        }
    }
    
    return (
       <SectionFeedbackStyled>
            {!autorizacao ? (
            <>
                <div onClick={handleAlteraVisão}>
                    <ButtonSubmit
                        type="button"
                        valueBtn="button"
                        valueText="Escreva seu Feedback:"
                        paddingValue="0.5em 0.2em"
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
                                valueText="Escreva seu Feedback:"
                                paddingValue="0.5em 0.2em"
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
                                    paddingValue="0.5em 0.2em"
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