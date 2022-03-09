import React from "react";
import "../Services/services.css";
import logo from "../../Images/image 4.png";
import image1 from "../../Images/Rectangle 14.png";
import service1 from "../../Images/Rectangle 294.png";
import service2 from "../../Images/Rectangle 295.png";
import service3 from "../../Images/Rectangle 296.png";
import service4 from "../../Images/Rectangle 297.png";
import service5 from "../../Images/Rectangle 298.png";
import image2 from "../../Images/Development.png";
import callimg from "../../Images/call.png";

import ServicesCard  from "./servicesCard";

import Navbar from '../../Components/navbar/navbar';

function Services(){
    return(
        <div>
            <Navbar />
            <div className="section-1">
                <span>Our</span><span className="blue">Services</span>
                <h1>Always there for our customers</h1>
                <img src={image1}  alt=""  />
            </div>
            <div className="section-2">
                <div className="card1">
                    <img src={service1}  alt=""  />
                    <ul><b>BACKEND SERVICES</b>
                        <li>Cloud computing</li>
                        <li>Oracle application</li>
                    </ul>
                </div>
                <div className="card2">
                    <img src={service2}  alt="" />
                    <ul><b>WEB & APP DEVELOPMENT</b>
                        <li>Mobile app development</li>
                        <li>Enterprizes applications using Java,.net & PHP</li>
                    </ul>
                </div>
                <div className="card3">
                    <img src={service3} alt=""  />
                    <ul><b>DATA ENGINERRING</b>
                        <li>Big Data</li>
                        <li>SAP</li>
                    </ul>
                </div>
                <div className="card4">
                    <img src={service4} alt=""  />
                    <ul><b>TRAINING</b>
                        <li>Placement and training</li>
                    </ul>
                </div>
                <div className="card5">
                    <img src={service5} alt=""  />
                    <ul><b>COMMUNICATIONS</b>
                        <li>NFC & RFID services</li>
                    </ul>
                </div>
            </div>
            <div className="section2">
                <img src={image2}  alt="" />
                <div className="section2-1">
                    <span>Loren ipsum dolor sit amet,consectetur  </span>
                </div>
            </div>
           
            <div className="section4">
                <span>Loren ipsum dolor sit amet, consectetur  </span>
                <button>Contact us</button>
                <img src={callimg}  alt="" />
            </div>

            <div>
                <ServicesCard />
            </div>


            <div className="section5">
                <img src={logo} alt=""  />
                <span>We specialise in providing solutions in both software and staffing that require a thorough 
                understanding of business, technology, and the balance between the two. </span>
            </div>
            <div className="S-section3">
                {/* <div className="social">
                    <h1 className="social-h1">social</h1><br />
                    <p>linkedin</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div> */}
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
                {/* <div className="extra">
                    <span className="copyright">© Copyright nfcsolutionsusa. All Rights Reserved</span>
                    <span className="terms">Terms & Conditons</span>
                    <span className="privacy">Privacy Policy</span>
                </div> */}
                
            </div>
        </div>
    )
}
export default Services;
