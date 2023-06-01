import { Fragment } from "react"
import { Link } from "react-router-dom";
import Banner1 from "../../../assets/imgs/banner1.png";
import Banner2 from "../../../assets/imgs/banner2.png";
import Banner3 from "../../../assets/imgs/banner3.png";

const Banner = () => {

    const bannerImgs = [
        {
            img: Banner2,
            zIndex: 10,
            width: 80,
            left: 0,
        },
        {
            img: Banner1,
            zIndex: 20,
            width: 80,
            marginTop: 6
        },
        {
            img: Banner3,
            zIndex: 30,
            width: 35,
            right: 4,
            marginTop: 10
        },
    ];

    return (
        <Fragment>
            <div id="banner" className="banner w-full h-[125rem] bg-gradient-to-b from-[#2e2d39] to-[#4C294A] flex flex-col justify-center items-center relative z-10">
                <div className="banner-title text-center leading-[8rem] mt-[14rem] mb-[6rem]">
                    <div>
                        <span className="text-white text-[9rem] font-bold">{"Add a "}
                            <span className="text-[#FFCC00]">{"shopping"}</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-[#FFCC00] text-[9rem] font-bold">{"cart "}
                            <span className="text-white">{"to any website"}</span>
                        </span>
                    </div>
                    <h2 className="banner-sub-title text-white text-4xl my-20">
                        {"Start accepting international payments in minutes."}
                    </h2>
                    <Link to="/viewDemo">
                        <button
                            className="bg-[#FFCC00] py-6 px-16 rounded-3xl text-3xl text-[#2B2631] hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] duration-300"
                        >
                            {'View demo'}
                        </button>
                    </Link>
                </div>
                <div className="banner-img w-[90%] h-full">
                    <ul className="banner-img__list h-full flex justify-center relative">
                        {bannerImgs.map((bannerImgItem: any, index: number) => (
                            <li
                                key={index}
                                className="banner-img__item absolute"
                                style={{
                                    zIndex: `${bannerImgItem.zIndex}`,
                                    left: `${bannerImgItem.left}rem`,
                                    right: `${bannerImgItem.right}rem`,
                                    marginTop: `${bannerImgItem.marginTop}rem`
                                }}
                            >
                                <img
                                    alt="Img"
                                    src={bannerImgItem.img}
                                    style={{ width: `${bannerImgItem.width}rem` }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Banner;