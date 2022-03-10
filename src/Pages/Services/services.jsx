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
import aboutimg1 from "../../Images/aboutimg1.png";
import phone from "../../Images/phone.png"

function Services(){
    return(
        <div>
            <Navbar />
            <div className="section-1">
                <div className="our animate__animated animate__slideInLeft">
                    <span>Our</span><span className="blue">Services</span>
                </div>
                
                <h1 className="animate__animated animate__slideInLeft">We deliver innovative digital solutions</h1>
                <img src={image1}  alt=""  />
                <button className="findmore animate__animated animate__slideInUp">Find more</button>
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
                    <ul><b>COMMUNICATION</b>
                        <li>NFC & RFID services</li>
                    </ul>
                </div>
            </div>
            <div className="section-3">
                <img src={aboutimg1}  alt="" />
                <div className="section3-1">
                    <div className="about-c">
                        <span>We provide you with what we need because the results of the work are important to us.   </span>
                    </div>
                    
                </div>
            </div>
           
            <div>
                <ServicesCard />
            </div>
            <div className="section-4">               
                    <div className="contact-c">
                        <span>Please get in touch with us, if you have something to share </span>
                    </div>
                    <button className="touch">Get in touch</button>
                    <div className="phone">
                        <img src={phone}  alt="" /> 
                    </div>
                                   
            </div>
            <div className="section5">
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
export default Services;
