import "./navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../Images/logo.png"
function Navbar(){
    return(
        
        <div>
            <div class="navbar">
                <div>
                    <Link to="/" > <img className="navbar-logo1" src={Logo} alt="" /> </Link>
                </div>
                <div className="nav-menu1">
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> About Us</Link> </p>
                    <p className='nav-item'><Link to="/Services" className='nav-links'> Services</Link> </p>
                    <p className='nav-item'><Link to="/Customers-products" className='nav-links'> Work</Link> </p>
                    <p className='nav-item'><Link to="/Careers" className='nav-links'> Careers</Link> </p>
                    <p className='nav-item'><Link to="/ContactUs" className='nav-links'> Contact Us</Link> </p>
                </div>
            </div>
        </div>
    );
}
export default Navbar;