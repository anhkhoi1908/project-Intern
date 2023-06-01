import { Fragment } from "react";
import style from "./bannerBlog.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blockProductList from "../../api/bannerProduct";
import { Link } from "react-router-dom";

const BannerBlog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoSpeed: 1000,
    };

    return (
        <Fragment>
            <div className="banner bg-gradient-to-b from-[#2e2d39] to-[#4C294A] w-full h-[70rem] text-white flex">
                <div className="banner-title text-[9rem] font-bold leading-[10rem] w-1/2 flex flex-col items-center justify-center">
                    <h1>{"In-Depth"}</h1>
                    <h1 className="text-[#FFCC00]">{"Developer"}</h1>
                    <h1>{"Resources"}</h1>
                </div>
                <div className={`${style.banner_slider} banner-slider w-1/2 h-full flex justify-center items-center`}>
                    <Slider {...settings} className="w-full z-20 h-[10rem]">
                        <ul>
                            {blockProductList.map((blogProductItem: any, index: number) => (
                                <li
                                    key={index}
                                    className={`${style.blogProduct_Item} w-[44rem] px-14 py-6 hover:scale-110 duration-300 rounded-3xl`}
                                >
                                    <span className="text-[1.6rem] text-[#7A7B80]">{blogProductItem.date}</span>
                                    <Link to="">
                                        <h1 className="text-3xl font-bold mt-4 hover:underline">
                                            {blogProductItem.title}
                                        </h1>
                                    </Link>
                                    <div className="flex my-14">
                                        <img
                                            src={blogProductItem.image}
                                            alt="Img"
                                            width={60}
                                            height={60}
                                            className="rounded-full block relative"
                                        />
                                        <img
                                            src={blogProductItem.logo}
                                            alt="Img"
                                            className="bg-[#FFCC00] rounded-full w-[3rem] h-[3rem] absolute ml-16 mt-[-1.6rem]"
                                        />
                                        <div className="ml-10">
                                            <h3 className="text-[1.6rem]">{blogProductItem.name}</h3>
                                            <span className="text-[1.4rem] text-[#7A7B80]">{blogProductItem.position}</span>
                                        </div>
                                    </div>
                                    <div className="text-[1.4rem]">
                                        <button>
                                            <Link
                                                to=""
                                                className={`font-bold text-white px-4 py-1 block rounded-xl`}
                                                style={{ backgroundColor: `${blogProductItem.color}` }}
                                            >
                                                {blogProductItem.taxonomy}
                                            </Link>
                                        </button>
                                        <button className="ml-8">
                                            <Link
                                                to="">{blogProductItem.sub_catgory}
                                            </Link>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Slider>
                </div>
            </div>
        </Fragment>
    );
}

export default BannerBlog;