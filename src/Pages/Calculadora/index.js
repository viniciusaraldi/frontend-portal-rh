import styled from 'styled-components'
import FormularioCalculadora from '../../Components/FormularioCalculadora';
import GridCalculadora from '../../Components/GridCalculadora';
import SubtituloCalculadora from '../../Components/SubtituloCalculadora';
import TituloCalculadora from '../../Components/TituloCalculadora';
import TotalCalculadora from '../../Components/TotalCalculadora';

const SectionStyled = styled.section`
    width: 100%;
`;

function Calculadora() {
    return (
        <SectionStyled>
            <TituloCalculadora />
            <SubtituloCalculadora />
            <FormularioCalculadora />
            <GridCalculadora />
            <TotalCalculadora />
        </SectionStyled>
    )
}


export default Calculadora
