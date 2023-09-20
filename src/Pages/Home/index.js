import styled from 'styled-components';
import HomeContainerNovidades from '../../Components/HomeContainerNovidades';
import HomeContainerOpcoes from '../../Components/HomeContainerOpcoes';

const HomeStyled = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
        && {
            flex-direction: row-reverse;
            align-items: flex-start;
            width: 100vw;
        }
    }

    @media screen and (min-width: 1400px) {
        && {
            margin: 2em 0;
        }
    }
`;

function Home() {
    return (
        <HomeStyled>
            <HomeContainerOpcoes />
            <HomeContainerNovidades />
        </HomeStyled>
    )
}

export default Home
