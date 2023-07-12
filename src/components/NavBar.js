import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            |
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )

}

export default NavBar;