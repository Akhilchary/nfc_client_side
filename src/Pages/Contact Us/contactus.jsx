import "./contactus.css";
import Navbar from "../../Components/navbar/navbar";
//import nfcTag from "../../Components/NFC-TAG/nfc_tag";
import Logo from "../../Images/logo.png";
import Phone from "../../Images/unsplash_QLqNalPe0RA.png";
import call from "../../Images/Vector1.png";
import At_the_rate from "../../Images/Vector2.png";
import messege from "../../Images/Vector3.png";


function contactUs(){
    return(
        <>
            <div class="navbar">
                <Navbar />
            </div>
            <div className="body1">
                <h1 class="contactus_landing_text">Contact Us</h1>
                <p className="contactus_landing_textdescription">We would love to hear from you </p>
                <p className="contactus_landing_textdescription1">Any thing that you want us to know. Ranging from an idea you have, to feedback about our service, feel free to let us know. </p>
                <img class="contactus_landing_image" src={Phone} alt="" />
                {/* <img src={call} alt="" className="contactus_landing_call" />
                <img src={At_the_rate} alt="" className="contactus_landing_at_the_rate" />
                <img src={messege} alt="" className="contactus_landing_messege" /> */}
            </div>  
            <div className="body2">
                <p className="body2_text1">Fill out the form</p>
                <p className="body2_text2">So that we can process your request faster</p>
                <p className="contactus_conversation">Let’s start a conversation</p>
                <div className="body2_box">
                    <input className="contactus_fname" type="text" name="name" placeholder="First Name*" required />
                    <input className="contactus_lname" type="text" name="name" placeholder="Last Name*" required />
                    <input className="contactus_phone" type="text" name="name" placeholder="Phone Number*" required />
                    <input className="contactus_email" type="text" name="name" placeholder="Email*" required />
                    <input className="contactus_help" type="text" name="name" placeholder="How can we help*" required />
                    <button class="contactus_send_button"><p className="contactus_send_text">Send</p></button> 
                </div>
            </div>
            <div class="body3">
                <div className="ourLocation">
                    <p className="contactus_ourlocation_text">Our Location</p>
                    <div className="address_boxes">
                        <div className="contactus_usa_box">
                            <p className="usa_text">
                            USA</p>
                            <p className="contactus_address">4320 Winfield Road Suite 200, Warrenville Illinois, 60555
                            United States of America <br /> <br /> <span>Phone : +1 (630) 836 8067</span></p>
                            
                        </div>
                        <div className="contactus_india_box">
                            <p className="usa_text">
                            India</p>
                            <p className="contactus_address">2nd Floor, MR Prime,
                            Survey No.6, BP Raju Marg,
                            (Behind Ratnadeep Super Market)
                            White Fields, Kondapur,
                            Hyderabad, Telangana – 500084 <br /> <br /> <span>Phone : +91 XXXXXXXXXX</span></p>
                            
                        </div>
                    </div> 
                </div>
            </div>
            <div className="body4">
                <div className="nfc_description_page">
                <hr /> <br />
                    <img src={Logo} alt="" className="nfc_logo" />
                    <p className="nfc_description">We specialise in providing solutions in both software and staffing that require a thorough understanding of business, technology, and the balance between the two. </p>
                    <hr ></hr>
                </div>
                
            </div>
            <div className="Contactus_footer">
            {/* <hr class="line_above_footer" /> */}
                <div className="Contactus_footer_social">
                    <h2 className="Contactus_footer_social_text">Social</h2>
                    <p className="Contactus_footer_instagram">Instagram</p>
                        <p className="Contactus_footer_facebook">Facebook</p>
                        <p className="Contactus_footer_linkedin">LinkedIn</p>
                </div>
                <div className="Contactus_footer_sitemap">
                    <h2 class="Contactus_footer_sitemap_text">Sitemap</h2>
                    <p className="Contactus_footer_aboutus">About Us</p>
                    <p className="Contactus_footer_services">Services</p>
                    <p className="Contactus_footer_work">Work</p>
                    <p className="Contactus_footer_careers">Careers</p>
                    <p className="Contactus_footer_contact">Contact</p>

                    
                </div>
                <div className="Contactus_footer_office"><p />
                    <p className="Contactus_footer_office_text">Office</p>
                    <div className="Contactus_footer_usa">
                        <p className="Contactus_footer_usa_text">USA</p>
                        <p className="Contactus_footer_usa_address">4320 Winfield Road Suite 200, Warrenville Illinois, 60555</p>
                    </div>
                    <br />
                    <div className="Contactus_footer_india">
                        <p className="Contactus_footer_usa_text">India</p>
                        <p className="Contactus_footer_usa_address">2nd Floor MR Prime, Survey No.6, BP Raju Marg, (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                    </div>    
                </div>
            </div>
            <div className="Contactus_footer_bottom">
                <p className="Contactus_footer_copyright">© Copyright nfcsolutionsusa. All Rights Reserved</p>
                <p className="Contactus_footer_terms">Terms & Conditons <hr /></p>
                <p className="Contactus_footer_privacy">Privacy Policy <hr /></p>
            </div>
        
            

            
        </>
    );
}
export default contactUs;
