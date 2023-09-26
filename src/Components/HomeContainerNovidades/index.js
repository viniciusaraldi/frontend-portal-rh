import { useEffect, useState } from 'react';
import styled from 'styled-components';
import requisicaoNovidadesGet from '../../services/Novidades';

const HomeContainerNovidadesStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 404px;
    width: 90%;
    padding: 1em;
    margin: 1em 1.5em 0;
    border-radius: 20px;
    background-color: var(--color-secondary);
    overflow-y: auto;

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

    
    @media screen and (min-width: 1400px) {
        && {
            height: 80vh;
        }
    }
`;

function HomeContainerNovidades() {
    const [novidades, setNovidades] = useState([])

    useEffect(() => {
        geraRequisicaoNovidades()
    }, []);


    async function geraRequisicaoNovidades() {
        const data = await requisicaoNovidadesGet();
        setNovidades(data.message)
    }
    console.log(novidades)

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
