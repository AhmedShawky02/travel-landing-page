import classes from './Footer.module.css'
import logo from "../../assets/My_logo.png"
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

import img1 from "../../assets/Footer/Google Play.png"
import img2 from "../../assets/Footer/Play Store.png"

const Footer = () => {
    return (
        <>
            <div className={classes.FooterSection}>
                <div className={classes.container}>
                    <div className={classes.logoTitle}>
                        <img src={logo} alt="logo" />
                        <p>Book your trip in minute, get full Control for much longer.</p>
                    </div>
                    <div className={classes.group}>
                        <h3>Company</h3>
                        <div className={classes.list}>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Mobile</p>
                        </div>
                    </div>
                    <div className={classes.group}>
                        <h3>Contact</h3>
                        <div className={classes.list}>
                            <p>Help/FAQ</p>
                            <p>Press</p>
                            <p>Affilates</p>
                        </div>
                    </div>
                    <div className={classes.group}>
                        <h3>More</h3>
                        <div className={classes.list}>
                            <p>Airlinefees</p>
                            <p>Airline</p>
                            <p>Low fare tips</p>
                        </div>
                    </div>
                    <div className={classes.social}>
                        <div className={classes.socialLinks}>
                            <FaFacebook />
                            <FaInstagram />
                            <FaXTwitter />
                        </div>
                        <p>Discover our app</p>
                        <div className={classes.socialImages}>
                            <img src={img1} alt="img1" />
                            <img src={img2} alt="img2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;