import React from "react";
import "./aboutus.css"
import logo from "../../Images/image 4.png"
import meeting from "../../Images/Rectangle 255.png";
import hands from "../../Images/Rectangle 194.png";
// import brokeage from "../../Images/piggy-bank.png";
// import telecom from "../../Images/telecommunications.png";
// import pharma from "../../Images/fingerprint.png";
// import technology from "../../Images/notebook-computer.png";
// import insurance from "../../Images/umbrella.png";
// import government from "../../Images/government.png";
// import facility from "../../Images/facility-management.png";
// import supply from "../../Images/supply-chain.png";
// import events from "../../Images/events management.png";
import idea from "../../Images/idea.png";
import user from "../../Images/user.png";
import technical from "../../Images/technical-support.png";
import Navbar from '../../Components/navbar/navbar';


// import 'animate.css'


function Aboutus(){
    return(
        <div>
            
            <Navbar />

            <div className="A-section1">
                <h1>About Us</h1>
                <img src={meeting} alt=""  />
                <div className="content1">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum </span>
                    <div className="icons">
                        
                        <img class="idea animate__animated animate__slideInRight" src={idea} alt=""  />
                        <img class="user animate__animated animate__slideInRight" src={user}  alt="" />
                        <img class="technical animate__animated animate__slideInRight" src={technical}  alt="" />
                    </div>
                    
                </div>
                
            </div>
            <div className="A-section2">
                <h1>Our Vision</h1>
                <img src={hands} alt=""  />
                <div className="content2">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur 
                    adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.</span>
                </div>
                
            </div>
            {/* <div className="A-section3">
                <h1>Domain Expertise</h1>
                <div className="cards">
                    <div className="card1">
                        <img src={brokeage} />
                        <p>Banking Brokeage</p>
                    </div>
                    <div className="">
                        <img src={telecom} />
                        <p>Telecom</p>
                    </div>
                    <div className="">
                        <img src={pharma} />
                        <p>Pharma & Health care</p>
                    </div>
                    <div className="">
                        <img src={technology} />
                        <p>Technology</p>
                    </div>
                    <div className="">
                        <img src={insurance} />
                        <p>Insurance</p>
                    </div>
                    <div className="">
                        <img src={government} />
                        <p>Government</p>
                    </div>
                    <div className="">
                        <img src={facility} />
                        <p>Facility Management</p>
                    </div>
                    <div className="">
                        <img src={supply} />
                        <p>Supply Chain</p>
                    </div>
                    <div className="">
                        <img src={events} />
                        <p>Events Managements</p>
                    </div>

                </div>


            </div> */}
            <div className="A-section4">
                <img src={logo}  alt="" />
                <div className="about1">
                    <span className="about-content1">We specialise in providing solutions in both software and staffing that require a 
                    thorough understanding of business, technology, and the balance between the two. </span>
                </div>
            </div>
            
            <div className="A-section5">
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
export default Aboutus;