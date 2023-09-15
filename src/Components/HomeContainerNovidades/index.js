import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { funcoesNovidades } from '../../services/Novidades';

const HomeContainerNovidadesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 404px;
    padding: 1em;
    background-color: var(--color-primary);

    h2 {
        margin: -2em 0;
    }

    
    @media screen and (min-width: 800px) {
        && {
            height: 83vh;
            width: 130%;
            border-top-right-radius: 20px;
        }
    }
`;

function HomeContainerNovidades() {
    const [novidades, setNovidades] = useState([])

    useEffect(() => {
        geraRequisicaoNovidades()
    }, []);


    async function geraRequisicaoNovidades() {
        const data = await funcoesNovidades.requisicaoNovidadesGet();
        setNovidades(data.message)
    }

    return (
        <HomeContainerNovidadesStyled>
            <h2>Novidades</h2>
            {novidades.map((novidade) => (
                <p key={novidade._id}>{novidade.novidade}</p>
            ))}
        </HomeContainerNovidadesStyled>
    )
}

export default HomeContainerNovidades
