import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            
            <h2>Nave bar</h2>
            <span className="block bg-amber-300">My Website</span>
            <nav className="flex gap-2">
             
                <Link to={"/"}>Home</Link>
                {/* <Link to={"/about"}>about</Link> */}
                {/* <Link to={"/contact"}>Contact</Link> */}
                <NavLink to={'/about'}> about</NavLink>
                <NavLink to={'/contact'}> Contact</NavLink>
                <Link to={"/users"}>Users</Link>
                <Link to={"/posts"}>Posts</Link>
            </nav>
        
        </div>
    );
};

export default Header;