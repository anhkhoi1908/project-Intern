import { Fragment } from "react";
import { Link } from "react-router-dom";
import MerImg from "../../../assets/imgs/merchant.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClockRotateLeft, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Merchants = () => {

    const MerItems = [
        {
            icon: faClockRotateLeft,
            title: 'Save time and money',
            content: 'Integrating our e-commerce solution is like baby Yoda: short & sweet.',
        },
        {
            icon: faDollarSign,
            title: 'Boost sales',
            content: 'Use our discounts, abandoned cart retrievals, and customized shipping methods. Measure what works and what doesn\'t with sales analytics.',
        }
    ];

    return (
        <Fragment>
            <div className="developers bg-[#F7F6ED] pt-[14rem]" id="developers">
                <h1 className="dev-title text-7xl font-bold text-[#2B2631] text-center mb-[8rem]">
                    {"Merchants"}
                </h1>
                <div className="merchant-item dev-content flex justify-center items-center">
                    <div className="w-[60rem]">
                        <ul className="flex justify-center items-center flex-col">
                            {MerItems.map((MerItem: any, index: number) => (
                                <li key={index} className="dev-item w-[40rem] mb-[10rem]">
                                    <div className="text-5xl text-[#7081FF] font-thin">
                                        <FontAwesomeIcon icon={MerItem.icon} />
                                    </div>
                                    <h1 className="text-5xl font-bold text-[#2B2631] my-[3rem] leading-[3rem]">
                                        {MerItem.title}
                                    </h1>
                                    <span className="text-3xl text-[#2B2631] leading-[3rem]">
                                        {MerItem.content}
                                    </span>
                                    <div className="text-3xl text-[#7081FF] mt-[3rem]">
                                        <Link to="">
                                            <span className="mr-4">{"Learn more"}</span>
                                            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[60rem] h-[60rem]">
                        <img src={MerImg} alt="Img" />
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Merchants;