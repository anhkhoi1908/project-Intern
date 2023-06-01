import { Fragment } from 'react';
import thinKingItems from '../../api/thinking';
import style from "./thinking.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Thinking = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoSpeed: 1000,
    };

    return (
        <Fragment>
            <div className={`w-[120rem] mx-auto h-[65rem] thinkingBlockResponsive`}>
                <Slider {...settings} className={`${style.slide_thinkingItemList}`}>
                    {thinKingItems.map((thinkingItem: any, index: number) => (
                        <div
                            key={index}
                            className={`${style.slide_thinkingItem} thinkingItem`}
                        >
                            <div className='thinkingItem-img w-[20rem] h-[20rem] mr-[6rem]'>
                                <img
                                    alt='Img'
                                    src={thinkingItem.img}
                                    className='thinkingItem-img__responsive rounded-full'
                                    width={200}
                                    height={200}
                                />
                                <div className='thinkingItem-info__responsive hidden'>
                                    <p className='font-extrabold text-2xl mt-[4rem] mb-[0.5rem]'>
                                        {thinkingItem.name}
                                    </p>
                                    <p className='text-2xl text-[#6C717F]'>
                                        {thinkingItem.currentPosition}
                                    </p>
                                </div>
                            </div>
                            <div className='thinkingItem-inner mb-[4rem] w-1/2 text-justify'>
                                <h1 className='text-8xl font-extrabold'>{"\""}</h1>
                                <span className='thinkingItem-content text-4xl leading-[3.4rem]'>
                                    {thinkingItem.content}
                                </span>
                                <div className='thinkingItem-info'>
                                    <p className='font-extrabold text-2xl mt-[4rem] mb-[0.5rem]'>
                                        {thinkingItem.name}
                                    </p>
                                    <p className='text-2xl text-[#6C717F]'>
                                        {thinkingItem.currentPosition}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    );
};

export default Thinking;