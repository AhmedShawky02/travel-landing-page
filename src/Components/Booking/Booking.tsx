import classes from './Booking.module.css'
import box from '../../assets/Booking_Images/box.png'
import car from '../../assets/Booking_Images/car.png'
import swimming from '../../assets/Booking_Images/swimming.png'
import girl from '../../assets/Booking_Images/girl Images/girl.jpg'

import icon1 from '../../assets/Booking_Images/girl Images/LEAF.png'
import icon2 from '../../assets/Booking_Images/girl Images/map.png'
import icon3 from '../../assets/Booking_Images/girl Images/send.png'

import building from '../../assets/Booking_Images/girl Images/building.png'
import heart from '../../assets/Booking_Images/girl Images/heart.png'
import place from '../../assets/Booking_Images/girl Images/place.png'

const Booking = () => {
    return (
        <>
            <div className={classes.BookingSection}>
                <div className={classes.container}>
                    <div className={classes.infoContainer}>
                        <div className={classes.header}>
                            <p>Easy and Fast</p>
                            <h2>Book your next trip in 3 easy steps</h2>
                        </div>
                        <div className={classes.rows}>
                            <div className={classes.row}>
                                <img src={box} alt="box" />
                                <div className={classes.rowInfo}>
                                    <p className={classes.title}>Choose Destination</p>
                                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <img src={swimming} alt="box" />
                                <div className={classes.rowInfo}>
                                    <p className={classes.title}>Make Payment</p>
                                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className={classes.row}>
                                <img src={car} alt="box" />
                                <div className={classes.rowInfo}>
                                    <p className={classes.title}>Reach Airport on Date</p>
                                    <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.imageContainer}>
                        <div className={classes.bigImage}>
                            <img className={classes.girImage} src={girl} alt="girl" />
                            <p className={classes.cartTitle}>Trip To Greece</p>
                            <p className={classes.cartSubtitle}>14-29 June | by Robbin joseph</p>
                            <div className={classes.icons}>
                                <img src={icon1} alt="icon1" />
                                <img src={icon2} alt="icon2" />
                                <img src={icon3} alt="icon3" />
                            </div>
                            <div className={classes.footer}>
                                <div className={classes.footerData}>
                                    <img src={building} alt="building" />
                                    <p>24 people going</p>
                                </div>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <div className={classes.smallImage}>
                            <img src={place} alt="place" />
                            <div className={classes.smallImageData}>
                                <p className={classes.p1}>Ongoing</p>
                                <p className={classes.title}>Trip to rome</p>
                                <p className={classes.p2}><span>40%</span> completed</p>
                                <span className={classes.percentage}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;