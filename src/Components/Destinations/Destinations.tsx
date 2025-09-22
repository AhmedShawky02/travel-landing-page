import classes from './Destinations.module.css'
import image_1 from "../../assets/Destinations_Images/image_1.png"
import image_2 from "../../assets/Destinations_Images/image_2.png"
import image_3 from "../../assets/Destinations_Images/image_3.png"
import { BiSolidNavigation } from 'react-icons/bi'

const Destinations = () => {
    return (
        <>
            <div className={classes.DestinationsSection}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <p>Top Selling</p>
                        <h2>Top Destinations</h2>
                    </div>
                    <div className={classes.cards}>
                        <div className={classes.card}>
                            <div className={classes.imageContainer}>
                                <img src={image_1} alt="image_1" />
                            </div>
                            <div className={classes.cardAllData}>
                                <div className={classes.data}>
                                    <p className={classes.city} >Rome, Italty</p>
                                    <p className={classes.price}>$5,42k</p>
                                </div>
                                <p className={classes.dayTrip}><BiSolidNavigation /> 10 Days Trip</p>
                            </div>
                        </div>

                        <div className={classes.card}>
                            <div className={classes.imageContainer}>
                                <img src={image_2} alt="image_2" />
                            </div>
                            <div className={classes.cardAllData}>
                                <div className={classes.data}>
                                    <p className={classes.city}>London, UK</p>
                                    <p className={classes.price}>$4.2k</p>
                                </div>
                                <p className={classes.dayTrip}>
                                    <BiSolidNavigation /> 12 Days Trip
                                </p>
                            </div>
                        </div>

                        <div className={classes.card}>
                            <div className={classes.imageContainer}>
                                <img src={image_3} alt="image_3" />
                            </div>
                            <div className={classes.cardAllData}>
                                <div className={classes.data}>
                                    <p className={classes.city} >Full Europe</p>
                                    <p className={classes.price}>$15k</p>
                                </div>
                                <p className={classes.dayTrip}><BiSolidNavigation /> 28 Days Trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destinations;