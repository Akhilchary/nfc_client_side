import React from "react";
import holding from "../../Images/holding.png";
import logo1 from "../../Images/image 4.png";
import Navbar from '../../Components/navbar/navbar';

function Careers(){
    return(
        <div>
            <Navbar />
            <div className="C-section1">
                <span className="C-heading">Careers</span> <br />
                <div className="C-Para">
                    <span className="C-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et pulvinar sem arcu 
                    integer nulla senectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh et 
                    pulvinar sem arcu integer nulla senectus.</span>
                </div>
                
                <img className="holding" src={holding} alt=""  />
            </div>
            <div className="C-section2">
                <h1 className="roles">Open Roles</h1>
                <div className="location">
                    <span>ALL</span>
                    <span>USA</span>
                    <span>India</span>
                </div> <br /> <br /><br />
                <div className="product">
                    <hr/><br /><br />
                    <span>Product Designer Intern</span><br /> <br /><br />
                    <hr/><br /><br /> 
                    <span>Product Designer</span><br /> <br /><br />
                    <hr/><br /><br />
                    <span>Blockchain Developer</span><br /> <br /><br />
                    <hr/><br /> <br />
                    <button className="view">View more</button>
                </div>
                
                    <img className="logo1" src={logo1}  alt=""   />
                <div className="about">
                    <span className="about-content">We specialise in providing solutions in both software and staffing that require a 
                    thorough understanding of business, technology, and the balance between the two. </span>
                </div>
            </div>
            <div className="C-section3">
                <div className="social">
                    <h1 className="social-h1">social</h1><br />
                    <p>linkedin</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
                <div className="sitemap">
                <h1 className="sitemap-h">sitemap</h1><br />
                    <p>About us</p>
                    <p>Services</p>
                    <p>Work</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="office">
                    <h1 className="office-h">office</h1><br />
                    <div className="us-c">
                        <h2>US</h2><br />
                        <p>4320 Winfield Road
                        Suite 200, Warrenville
                        Illinois, 60555</p>
                    </div>
                    <div className="india-c">
                        <h2>India</h2><br />
                        <p>2nd Floor MR Prime,
                        Survey No.6, BP Raju Marg,
                        (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                    </div>                   
                </div>
                <div className="extra">
                    <span className="copyright">© Copyright nfcsolutionsusa. All Rights Reserved</span>
                    <span className="terms">Terms & Conditons</span>
                    <span className="privacy">Privacy Policy</span>
                </div>
                
            </div>
        </div>
    )
}
export default Careers;