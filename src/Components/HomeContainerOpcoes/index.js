import styled from 'styled-components';
import OpcoesHome from '../OpcoesHome';
import fundoFeedback from '../../assets/images/fundoFeedback.png'
import fundoNatura from '../../assets/images/fundoNatura.png'

function HomeContainerOpcoes() {

    const HomeContainerOpcoesStyled = styled.div`
        padding: 1em 1em 0;

        a {
            display: inline-block;
            height: auto;
            width: 100%;
            margin: 0 0 1em;
        }
        
        @media screen and (min-width: 800px) {
            && {
                width: 90vw;
                margin: 0 3em;
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
    `;

    return (
        <HomeContainerOpcoesStyled>
             <OpcoesHome 
                    to="/feedback"
                    image={fundoFeedback}
                    text="Deixe seu feedback conosco!"
                />
                <OpcoesHome 
                    to="/restaurante"
                    image={fundoNatura}
                    text="Consulte nosso cardápio semanal!"
                />
        </HomeContainerOpcoesStyled>
    )
}

export default HomeContainerOpcoes