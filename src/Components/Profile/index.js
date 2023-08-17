import { Link } from "react-router-dom"

function Profile() {
    return (
        <>
            <Link to={"/login"}><i className="fa-solid fa-user"></i></Link>
        </>
    )
}

export default Profile
