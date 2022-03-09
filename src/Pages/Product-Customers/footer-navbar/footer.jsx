import React from 'react'
import './footer.css';
// import fi_arrow_down_circle from './icons/fi_arrow-down-circle.svg';
import nfc_logo from './icons/nfc-logo.png';

const Footer = () => {
  return (
    <div>
        <div className='getintouch-div'>
            <div className='getintouch-con'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitm ipsum dolor sit.</p>
            </div>
            <div className='getintouch-btn'>
                <button>Get in touch </button>
            </div>
        </div><br /><br />
        <hr />
        <div className='about-nfc'>
            <div className='nfc-img'>
                <img src={nfc_logo} alt="" srcset="" />
            </div>
            <div className='nfc-con'>
                <p>We specialise in providing solutions in both software and staffing that require a thorough understanding of business, technology, and the balance between the two. </p>

            </div>
        </div>
        <hr />
        <div className='footer-div'>
            <div className='social-div'>
                <p className='title'>Social</p>
                <div className='soc-p'>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className='sitemap-div'>
                <p className='title'>Sitemap</p>
                <div className='sitemap-p'>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Work</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>

            <div className='office-div'>
                <p  className='title'>office</p>
                <div className='off-ind-us'>
                    <div className='office-us'>
                        <h3>US</h3>
                        <div className='us-con'>
                            <p>4320 Winfield RoadSuite 200, Warrenville Illinois, 60555</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='curr-office'>
                <div className='office-ind'>
                    <h3>India</h3>
                    <div className='ind-con'>
                        <p>2nd Floor MR Prime, Survey No.6, BP Raju Marg, (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                    </div>
                </div>
            </div>
        
        </div>

        <div className='bottom-con'>
            <div className='cpr'>
                <p>© Copyright nfcsolutionsusa. All Rights Reserved</p>
            </div>
            <div className='tc'>
                <p>Terms & Conditons</p>
                <hr />
            </div>
            <div className='priv-policy'>
                <p>Privacy Policy</p>
                <hr />
            </div>
            
        </div>

    </div>
  )
}

export default Footer