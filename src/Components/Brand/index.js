import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/images/logo_preto.webp"

const BrandImgStyled = styled.img`
    width: 130px;
    max-width: 100%;
`;

const BrandStyled = styled.div`
    a {
        display: inline-block;
        width: 130px
    }
`;

function Brand() {
    return(
        <BrandStyled>
            <Link to={"/"}>
                <BrandImgStyled 
                    src={logo} 
                    alt="Logo do portal" />
            </Link>
        </BrandStyled>
    )
}

export default Brand
