import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            
            <h2>Nave bar</h2>
            <span className="block bg-amber-300">My Website</span>
            <nav className="flex gap-2">
             
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>about</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/users"}>Users</Link>
            </nav>
        
        </div>
    );
};

export default Header;