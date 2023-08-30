import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"

function Brand() {
    return(
        <>
            <Link to={"/"}><img src={logo} alt="Logo do portal" /></Link>
        </>
    )
}

export default Brand
