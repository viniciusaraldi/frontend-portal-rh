import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../Profile';

const HeaderOpcoesStyled = styled.div`
    div[data-bars=false] {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%, 0%);
        transition: .2s all;
        height: 100vh;
        width: calc(100vw - 4em);
        background-color: var(--color-primary);
    }
    div[data-bars=true] {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0%, 0%);
        transition: .2s all;
        z-index: 2;
        height: 100vh;
        width: calc(100vw - 4em);
        background-color: var(--color-primary);
    }
    button {
        padding: 1em;
        background: transparent;
        border: none;
    }
    button i {
        color: var(--color-thirty);
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    ul li, ul i {
        list-style-type: none;
        margin-left: 10px;
        padding: 1em;
        font-size: 1.3em;
        color: var(--color-thirty);
    }
    ul li:active, ul i:active {
        color: var(--color-secondary);
    }

    @media screen and (min-width: 800px) {
        button {
            display: none;
        }
        div[data-bars=true], div[data-bars=false] {
            flex-direction: row;
            position: initial;
            transform: translate(0);
            background: transparent;
            width: auto;
            height: auto;
        }
        ul {
            flex-direction: row;
        }
        ul li, ul i {
            padding: 10px 12px;
        }
        ul li:hover, ul i:hover, ul li:active, ul i:active {
            color: var(--color-primary);
        }
    }
`;

function Opcoes() {
    const [activeBars, setActiveBars] = useState(false)

    const opcoes = ['Restaurante','Feedback']

    const handleAtivaBars = () => {
        setActiveBars(!activeBars)
    }

    return (
        <HeaderOpcoesStyled onClick={handleAtivaBars}>
            <button><i className="fa-solid fa-bars-staggered"></i></button>
            <div className={activeBars ? 'div[data-bars=true]' : 'div[data-bars=false]'} data-bars={activeBars}>
                <ul>
                    {opcoes.map((opcao) => (
                        <Link to={opcao.toLowerCase()} key={opcoes.indexOf(opcao)} ><li key={opcoes.indexOf(opcao)}>{opcao}</li></Link>
                    ))}
                    <Profile />
                    <button><i className="fa-solid fa-bars-staggered"></i></button>
                </ul>
            </div>
        </HeaderOpcoesStyled>
    )
}

export default Opcoes
