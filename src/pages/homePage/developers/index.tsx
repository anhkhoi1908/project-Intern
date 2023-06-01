import { Fragment } from "react";
import { Link } from "react-router-dom";
import DevImg from "../../../assets/imgs/dev.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCodeFork, faCode } from "@fortawesome/free-solid-svg-icons";

const Developers = () => {

    const devItems = [
        {
            icon: faCodeFork,
            title: 'Add a cart platform to your favorite website',
            content: 'Snipcart is unashamedly polygamous when comes to tech stack. Jamstack, coupled, we don\'t mind.',
        },
        {
            icon: faCode,
            title: 'Connect with your favorite tools',
            content: 'Snipcart offers APIs & webhooks to set up butter-smooth comms between external tools.',
        }
    ];

    return (
        <Fragment>
            <div className="developers pt-[14rem]" id="developers">
                <h1 className="dev-title text-7xl font-bold text-[#2B2631] text-center mb-[8rem]">
                    {"Developers"}
                </h1>
                <div className="dev-content flex justify-center items-center">
                    <div className="dev-img w-[60rem] h-[60rem]">
                        <img src={DevImg} alt="Img" />
                    </div>
                    <div className="w-[60rem]">
                        <ul className="flex justify-center items-center flex-col">
                            {devItems.map((devItem: any, index: number) => (
                                <li key={index} className="dev-item w-[40rem] mb-[10rem]">
                                    <div className="text-5xl text-[#7081FF] font-thin">
                                        <FontAwesomeIcon icon={devItem.icon} />
                                    </div>
                                    <h1 className="dev-item__title text-5xl font-bold text-[#2B2631] my-[3rem] leading-[4rem]">
                                        {devItem.title}
                                    </h1>
                                    <p className="text-3xl text-[#2B2631] leading-[3rem]">
                                        {devItem.content}
                                    </p>
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
                </div>
            </div>
        </Fragment >
    );
};

export default Developers;