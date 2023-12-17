import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const data = {
        'name': 'Sonam'
    }

    return (
        <>
            <h1>Dashboard Page</h1>
            <button onClick={() => navigate('/logout', { state: data })}>Logout</button>
        </>
    );
}

export default Dashboard;