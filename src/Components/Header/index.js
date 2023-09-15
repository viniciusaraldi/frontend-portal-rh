import styled from "styled-components";
import Brand from "../Brand";
import Opcoes from "../Opcoes";

const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    padding: 1em 1.5em;
    background-color: var(--color-secondary);
    align-items: center;
    position: relative;
    justify-content: space-between;

    @media screen and (min-width: 800px) {
        && {
            padding: 1em 5em;
        }
    }
`;

function Header() {
    return (
        <HeaderStyled>
            <Brand />
            <Opcoes />
        </HeaderStyled>
    )
}

export default Header