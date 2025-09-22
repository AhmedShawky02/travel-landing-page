import classes from './Offers.module.css'
import Weather from "../../assets/Offer_Images/Weather.png"
import Flights from "../../assets/Offer_Images/Flights.png"
import Events from "../../assets/Offer_Images/Events.png"
import Customization from "../../assets/Offer_Images/Customization.png"

const Offers = () => {
    return (
        <>
            <div className={classes.OffersSection}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <p>CATEGORY</p>
                        <h2>We Offer Best Services</h2>
                    </div>
                    <div className={classes.cards}>
                        <div className={classes.card}>
                            <img src={Weather} alt="Weather" />
                            <p className={classes.title}>Calculated Weather</p>
                            <p className={classes.description}>Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>

                        <div className={classes.card}>
                            <div className={classes.cartFlight}>
                                <img src={Flights} alt="Flights" />
                                <p className={classes.title}>Best Flights</p>
                                <p className={classes.description}>Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                        </div>

                        <div className={classes.card}>
                            <img src={Events} alt="Events" />
                            <p className={classes.title}>Local Events</p>
                            <p className={classes.description}>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                        </div>

                        <div className={classes.card}>
                            <img src={Customization} alt="Customization" />
                            <p className={classes.title}>Customization</p>
                            <p className={classes.description}>We deliver outsourced aviation services for military customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offers;