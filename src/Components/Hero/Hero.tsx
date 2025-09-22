import classes from './Hero.module.css'
import hero from '../../assets/Hero_Images/girl.png'
import plane from '../../assets/Hero_Images/plane.png'
import { MdOutlinePlayCircleFilled } from 'react-icons/md'

const Hero = () => {
    return (
        <>
            <div className={classes.HeroSection}>
                <div className={classes.container}>
                    <div className={classes.infoData}>
                        <p className={classes.subtitle}>Best Destinations around the world</p>
                        <h1 className={classes.title}>Travel,<span>enjoy</span>  <br /> and live a new <br /> and full life</h1>
                        <p className={classes.description}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        <div className={classes.btns}>
                            <button className={classes.findBtn}>Find out more</button>
                            <button className={classes.playBtn}><MdOutlinePlayCircleFilled /> Play Demo</button>
                        </div>
                    </div>
                    <div className={classes.images}>
                        <img className={classes.plane1} src={plane} alt="plane1" />
                        <img className={classes.plane2} src={plane} alt="plane1" />
                        <img className={classes.hero} src={hero} alt="hero_image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;