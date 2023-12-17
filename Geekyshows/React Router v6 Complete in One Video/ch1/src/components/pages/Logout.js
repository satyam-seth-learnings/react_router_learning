import { useLocation } from "react-router-dom";

const Logout = () => {
    const location = useLocation();

    return (
        <>
            <h1>Logout Page</h1>
            <h2>{location.state.name ?? 'User'} Logged Out!!</h2>
        </>
    );
}

export default Logout;