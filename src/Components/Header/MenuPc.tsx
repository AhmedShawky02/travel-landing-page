import logo from "../../assets/My_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { BiCalendarCheck, BiHotel, BiLogIn, BiMapPin, BiPlanet, BiUserPlus } from "react-icons/bi";
import type { Dispatch, SetStateAction } from "react";
import classes from "./MenuPc.module.css";
import { motion } from "framer-motion"

const MenuPc = ({ setMenuOpen }: { setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <>
            <motion.div
                className={classes.containerAnimation}
                initial={{ opacity: 0.5, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: -30 }}
                transition={{ duration: 0.4 }}
            >
                <nav className={classes.container}>
                    <div className={classes.mainLogo}>
                        <img className={classes.Logo} src={logo} alt="logo" />
                    </div>

                    <div className={classes.list}>
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
                    </div>
                </nav>
            </motion.div>
        </>
    );
}

export default MenuPc;