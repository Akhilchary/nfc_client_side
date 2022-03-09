import "./nfc_tag.css";
import Logo from "../../Images/logo.png";

function nfcTag(){
    return(
        <div className="nfc_description_page">
            <img src={Logo} alt="" className="nfc_logo" />
            <p className="nfc_description">We specialise in providing solutions in both software and staffing that require a thorough understanding of business, technology, and the balance between the two. </p>
        </div>
    );
}
export default nfcTag;