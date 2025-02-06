import '../App.css'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-title'>
                    Let's Connect:
                </div>
                <div className="footer-links consistent-row">
                    <a href="github.com" className="footer-link">GitHub</a>
                    <a href="linkedin.com" className="footer-link">LinkedIn</a>
                    <div className='footer-link'>Resume</div>
                    <div className='footer-link'>Email</div>  
                </div>
            </div>

            

        </div>
    )
}
export default Footer;