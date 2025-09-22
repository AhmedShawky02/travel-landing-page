import classes from './Reviews.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Slider.css'

import man from "../../assets/Reviews/man.png"

type datatype = {
    id: string,
    comment: string,
    name: string,
    city: string
}


const data: datatype[] = [
    {
        id: "1",
        comment: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        name: "Mike taylor",
        city: "Lahore, Pakistan"
    },
    {
        id: "2",
        comment: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
        name: "Chris Thomas",
        city: "CEO of Red Button"
    },

]

const Reviews = () => {
    return (
        <>
            <div className={classes.ReviewsSection}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <p>Testimonials</p>
                        <h2>What people say <br /> about Us.</h2>
                    </div>
                    <div className="reviewsSlider">
                        <Splide
                            options={{
                                type: "slide",
                                direction: "ttb",
                                height: "300px",
                                perPage: 1,
                                perMove: 1,
                                autoplay: false,
                                pagination: true,
                                arrows: true,
                            }}
                        >
                            {data.map((item) => (
                                <SplideSlide key={item.id}>
                                    <img
                                        src={man}
                                        className={classes.image}
                                    />
                                    <div className={classes.user}>
                                        <p className={classes.comment}>{item.comment}</p>
                                        <div className={classes.userData}>
                                            <p className={classes.name}>{item.name}</p>
                                            <p className={classes.city}>{item.city}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Reviews;