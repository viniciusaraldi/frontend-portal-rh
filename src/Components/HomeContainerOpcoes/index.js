import styled from 'styled-components';
import OpcoesHome from '../OpcoesHome';
// import fundoFeedback from '../../assets/images/fundoFeedback.webp'
import fundoNatura from '../../assets/images/fundoNatura.webp'

    const HomeContainerOpcoesStyled = styled.div`
        padding: 1em 1em 0;

        a {
            display: inline-block;
            height: auto;
            width: 372px;
            margin: 0 0 1em;
        }
        
        @media screen and (min-width: 800px) {
            && {
                width: 90vw;
                margin: 1em 3em 0;
            }

            a {
                width: 460px;
                height: 230px;
                transition: .2s all;
            }
            a:hover {
                padding: .5em;
            }
        }
        
        @media screen and (min-width: 1400px) {
            a {
                width: 650px;
                height: 350px;
            }
        }
    `;

function HomeContainerOpcoes() {

    return (
        <HomeContainerOpcoesStyled>
             {/* <OpcoesHome 
                    to="/feedback"
                    image={fundoFeedback}
                    text="Deixe seu feedback conosco!"
                /> */}
                <OpcoesHome 
                    to="/restaurante"
                    image={fundoNatura}
                    text="Consulte nosso cardápio semanal!"
                />
        </HomeContainerOpcoesStyled>
    )
}

export default HomeContainerOpcoes