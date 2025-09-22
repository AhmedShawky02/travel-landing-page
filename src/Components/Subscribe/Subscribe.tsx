import { MdOutlineEmail } from 'react-icons/md';
import classes from './Subscribe.module.css'

const Subscribe = () => {
    return (
        <>
            <div className={classes.SubscribeSection}>
                <div className={classes.container}>
                    <h3>Subscribe to get information, latest news and other interesting offers about Jadoo</h3>
                    <div className={classes.group}>
                        <div className={classes.theInput}>
                            <input id='email' type="text" placeholder='Your email' />
                            <label htmlFor="email"><MdOutlineEmail /></label>
                        </div>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;