import React from "react";
import Image1 from "../../../public/Image1.jpg";
import Image2 from "../../../public/Image2.jpg";
import Slider from "react-slick";
const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Happy Household",
        description: "Happy household is what we are trying to achieve.",
    },
    {
        id: 2,
        img: Image2,
        title: "Happy Neighbourhood",
        description: "Happy neighbourhood is what we are trying to achieve.",
    },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* background pattern */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text content section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:oder-1 relative z-10">
                                    <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl">
                                        {data.title}
                                    </h1>
                                    <p className="text-sm ">
                                        {data.description}
                                    </p>
                                    <div>
                                        <button className="font-bold bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* image section  */}
                            <div className="order-1 sm:order-2">
                                <div className="relative z-10">
                                    <img
                                        src={data.img}
                                        alt=""
                                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-125 "
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
