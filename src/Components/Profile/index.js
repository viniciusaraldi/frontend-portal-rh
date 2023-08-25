import { Link } from "react-router-dom"

function Profile() {
    return (
        <>
            {/* <Link to={"/login"}><<i className="fa-solid fa-user"></i>></Link> */}
            <Link to={"/login"}><li>Perfil</li></Link>
        </>
    )
}

export default Profile
