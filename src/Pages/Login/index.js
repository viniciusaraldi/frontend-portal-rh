import styled from 'styled-components'
import FormularioLogin from '../../Components/FormularioLogin/index.js'

const ContainerFormularioLoginStyled = styled.div`
    width: 100%;
    text-align: center;
`;

function Login() {


    return (
        <ContainerFormularioLoginStyled>
            <FormularioLogin />
        </ContainerFormularioLoginStyled>
    )
}

export default Login
