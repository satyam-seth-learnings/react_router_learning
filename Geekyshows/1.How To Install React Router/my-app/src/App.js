import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Index(){
    return <h2>Home</h2>;
}

function About(){
    return <h2>About</h2>;
}

function Users(){
    return <h2>Users</h2>;
}
function App(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                  <Route path="/" exact element={<Index/>} />
                  <Route path="/about/" element={<About/>} />
                  <Route path="/users/" element={<Users/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;