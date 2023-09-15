import styled from 'styled-components';
import HomeContainerNovidades from '../../Components/HomeContainerNovidades';
import HomeContainerOpcoes from '../../Components/HomeContainerOpcoes';

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
        && {
            flex-direction: row-reverse;
            align-items: flex-start;
            width: 100vw;
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
