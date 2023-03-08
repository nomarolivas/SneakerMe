import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        
        <nav className="navbar">
            <h1>SneakerMe</h1>
            <div className="links">
                <Link to="/">Shoes</Link>
                <Link to="/">Sale</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Login</Link>

            </div>

        </nav>
    );
}

export default Navbar;