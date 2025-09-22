import classes from './MenuMobile.module.css'
import logo from "../../assets/My_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { BiCalendarCheck, BiHotel, BiLogIn, BiMapPin, BiPlanet, BiUserPlus } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import { FiX } from 'react-icons/fi';
import { motion } from "framer-motion"

const MenuMobile = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <motion.div
                className={classes.containerAnimation}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.4 }}
            >
                <ul className={`${classes.container} ${menuOpen ? classes.open : ""}`}>
                    <div className={classes.list}>
                        <li>
                            <img className={classes.menuLogo} src={logo} alt="logo" />
                        </li>
                        <li>
                            <h3 className={classes.Menu}>Menu</h3>
                        </li>
                        <li>
                            <a
                                className={classes.ALink}
                                href="#Desitnations"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Desitnations");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiMapPin className={classes.IConLinkHeader} />
                                Destinations
                            </a>
                        </li>

                        <li>
                            <a
                                className={classes.ALink}
                                href="#Hotels"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Hotels");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiHotel className={classes.IConLinkHeader} />
                                Hotels
                            </a>
                        </li>

                        <li>
                            <a
                                className={classes.ALink}
                                href="#Flights"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Flights");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiPlanet className={classes.IConLinkHeader} />
                                Flights
                            </a>
                        </li>

                        <li>
                            <a
                                className={classes.ALink}
                                href="#Bookings"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Bookings");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiCalendarCheck className={classes.IConLinkHeader} />
                                Bookings
                            </a>
                        </li>

                        <div className={classes.SignUp_Login}>
                            <a
                                className={classes.ALink}
                                href="#Login"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Login");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiLogIn className={classes.IConLinkHeader} />
                                Login
                            </a>
                            <a
                                className={classes.SignUpLink}
                                href="#Sign up"
                                onClick={(e) => {
                                    setMenuOpen(false)
                                    e.preventDefault();
                                    const section = document.getElementById("Sign up");
                                    if (section) {
                                        const offset = 0;
                                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                <BiUserPlus className={classes.IConLinkHeader} />
                                Sign up
                            </a>
                        </div>
                        <li>
                            <button className={classes.btnLanguage}>EN <IoIosArrowDown /></button>
                        </li>
                        <li>
                            <FiX className={classes.IconCloseMenu} onClick={() => setMenuOpen(!menuOpen)} />
                        </li>
                    </div>
                </ul>
            </motion.div>
        </>
    );
}

export default MenuMobile;