import { Fragment } from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/imgs/banner-pricing.png";

const BannerPricing = () => {
    const titles = ["We offer fair, scalable pricing", "for online businesses"];
    const blockContents = ["Your revenues get directly deposited in", "your account, and we charge a tiny", "percentage based on the sales you made."];

    return (
        <Fragment>
            <div className="banner-pricing w-full h-[60rem] bg-gradient-to-b from-[#2e2d39] to-[#4C294A] flex flex-col items-center pt-[10rem]">
                <div className="text-white text-center font-bold absolute w-full">
                    <span className="banner-pricing__sub-title tracking-[0.5rem] text-4xl">{"Pricing"}</span>
                    <div className="mt-[4rem]">
                        {titles.map((title: string, index: number) => (
                            <h1
                                key={index}
                                className="banner-pricing__title text-8xl"
                            >
                                {title}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
            <div className="block-base__content w-1/2 bg-white rounded-3xl text-center flex flex-col justify-center items-center px-10 pb-2 pt-20 shadow-2xl mx-auto z-20 mt-[-12rem]">
                <img src={BannerImg} alt="Img" />
                <div className="card-plan__price my-[2rem]">
                    <span className="text-[4rem] font-bold">2
                        <span className="text-[2.4rem]">%
                            <span className="text-[2.4rem] font-normal text-[#757986]"> /transactions*
                            </span>
                        </span>
                    </span>
                    <h3 className="text-[1.8rem] text-[#757986]">{"+ Payment gateway fees"}</h3>
                    <div className="mt-[3rem]">
                        {blockContents.map((blockContent: string, index: number) => (
                            <h3
                                className="block-base__content--inner text-[1.8rem] text-[#757986]"
                                key={index}
                            >
                                {blockContent}
                            </h3>
                        ))}
                    </div>
                    <button className="my-[6rem]">
                        <Link to="" className="block-base__content--btn block text-[1.8rem] font-bold bg-[#FFCC00] px-14 py-4 rounded-3xl">
                            {"Register Now"}
                        </Link>
                    </button>
                    <h3 className="text-[1.8rem] bg-[#F0F2FF] text-[#757986] rounded-3xl text-left px-10 py-14">
                        {"*For clients with monthly sales under $ 629 CAD, the 2% will be replaced by a $ 13 CAD monthly fee. Note that you'll be charged in USD."}
                    </h3>
                </div>
            </div>
        </Fragment>
    );
}

export default BannerPricing;