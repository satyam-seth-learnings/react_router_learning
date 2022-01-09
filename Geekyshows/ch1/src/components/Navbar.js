import {Link,NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul> */}

            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
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