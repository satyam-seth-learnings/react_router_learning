import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeStyle={{fontWeight:"bold", color:"red"}} exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{fontWeight:"bold", color:"red"}} exact>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeStyle={{fontWeight:"bold", color:"red"}} exact>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post/mobile" activeStyle={{fontWeight:"bold", color:"red"}} exact>
                        Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post/mobile/1" activeStyle={{fontWeight:"bold", color:"red"}} exact>
                        Post with ID
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;