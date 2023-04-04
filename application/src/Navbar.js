import { Link } from 'react-router-dom';
// const StyledLink = styled(Link)`
//   color: Blue;
//   text-decoration: none;
//   margin: 1rem;
//   position: relative;
// `;
// const styles = {
    
//     tabLinks: {
//       padding: "20px",
//       color: "black",
//       fontWeight: 'bold'
      
//     },
//   };


const Navbar = () => {
    return (
        
        <nav className="navbar">
            <h1>SneakerMe</h1>
            <div className="tabLinks">
                
                <Link  className= "link" to="/Shoes">Shoes</Link>
                <Link className= "link" to="/Sale">Sale</Link>
                <Link className= "link" to="/About">About Us</Link>
                <Link className= "link" to="/Login">Login</Link>

            </div>

        </nav>
    );
}

export default Navbar;