import styled from "styled-components";

const HomeCanalStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    padding: 1em 0;
    border-radius: 20px;
    background: var(--color-thirty) url(${props => props.backgroundimage}) no-repeat center / cover;
    cursor: pointer;
    transition: .2s;
    position: relative;
    box-shadow: 0 0 8px var(--color-thirty);

    h2 {
        font-size: 1.3em;
        color: var(--color-secondary);
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    @media screen and (min-width: 800px) {
        && {
            width: 100%;
            height: 100%;
        }
    }`;

function HomeCanal(props) {
    
    return (
        <HomeCanalStyled
            backgroundimage={props.backgroundimage}>
            <h2>{props.titulo}</h2>
        </HomeCanalStyled>
    )
}

export default HomeCanal
