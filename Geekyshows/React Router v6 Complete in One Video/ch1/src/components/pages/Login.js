import { useLocation } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <h1>Login Page</h1>
            <h2>{location.state.st}</h2>
        </>
    );
}

export default Login;