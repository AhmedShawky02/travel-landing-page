import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Company_logo_1 from "../../assets/Logos_Images/image 27.png";
import Company_logo_2 from "../../assets/Logos_Images/image 28.png";
import Company_logo_3 from "../../assets/Logos_Images/image 29.png";
import Company_logo_4 from "../../assets/Logos_Images/image 30.png";
import Company_logo_5 from "../../assets/Logos_Images/image 31.png";


const logos = [
    Company_logo_1,
    Company_logo_2,
    Company_logo_3,
    Company_logo_4,
    Company_logo_5,
];

import "./SliderLogo.css"

const Logos = () => {
    return (
        <>
            <div className="LogosSection">
                <div className="logoSlider">
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 5,
                            perMove: 1,
                            autoplay: true,
                            interval: 1000,
                            pauseOnHover: false,
                            gap: '20px',
                            arrows: false,
                            pagination: false,
                            breakpoints: {
                                1800: { perPage: 6 },
                                1300: { perPage: 5 },
                                1024: { perPage: 4 },
                                850: { perPage: 3 },
                                650: { perPage: 2 },
                                500: { perPage: 1 },
                            },
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SplideSlide key={index}>
                                <img className="logoImage" src={logo} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    );
}

export default Logos;