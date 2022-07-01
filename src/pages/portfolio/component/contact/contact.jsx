
import { FaMapMarkerAlt,
    FaMobileAlt, FaRegEnvelope
} from "react-icons/fa";
import ContactIcon from "../contact-icon/contact.icon";
import './contact.scss';
const Contact = () =>{
    const handleSubmit = ()=>{
        alert('Coming Soon');
    }
    return (
        <div className="contact-container" id='contact'>
            <div className='send-message-container'>
                <h2 className='contact-title'>Eager to Hear Form you</h2>
                <form className='form-class'>
                    <input type='email' className='tb-field' placeholder='Your Name' />
                    <input type='email' className='tb-field' placeholder='Your Email'/>
                    <input type='email' className='tb-field'placeholder='Subject'/>
                    <textarea className='tb-field' placeholder='Message' rows={5}></textarea>
                </form>
                <button className='submit-btn' onClick={handleSubmit} >Send Message</button>
            </div>
            <div className='get-in-touch-container'>
                <h2 className='contact-title'>Get in Touch</h2>
                <p className='message-container'>
                    Thank you for visiting my portfolio, do share your comments in bellow links.
                    Have a Nice Day.
                </p>
                <div className='contact-detail'>
                    <p><FaMapMarkerAlt className="icon"/> <span className='bold'> Limassol, Cyprus, Europe </span></p>
                    <p><FaMobileAlt className="icon"/> <span className='bold'> (+357) 95744640 </span> </p>
                    <p><FaRegEnvelope className="icon"/> <span className='bold'>  ashutoshsarangi95@gmail.com </span></p>
                </div>
                <ContactIcon/>
            </div>
        </div>
    );
}

export default Contact;