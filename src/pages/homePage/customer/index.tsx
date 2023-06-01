import { Fragment } from "react";
import { Link } from "react-router-dom";
import DevImg from "../../../assets/imgs/customers.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGift, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Customers = () => {

    const customerItems = [
        {
            icon: faGift,
            title: 'Feel secure',
            content: 'Snipcart lives in your frontend, with no redirection. Customers aren’t teleported to foreign parts of the Internet just to “confirm purchase”.',
        },
        {
            icon: faLaptopCode,
            title: 'Checkout faster',
            content: 'Our product people spent hours digging through UX forums and best practices so you don\'t have to. Snipcart\'s checkout is dead-simple, focused on getting to “pay now” quickly.',
        }
    ];

    return (
        <Fragment>
            <div className="developers bg-[#F7F6ED] pt-[6rem]" id="developers">
                <h1 className="dev-title text-7xl font-bold text-[#2B2631] text-center mb-[8rem]">
                    {"Your Customer"}
                </h1>
                <div className="dev-content flex justify-center items-center">
                    <div className="w-[60rem] h-[60rem]">
                        <img src={DevImg} alt="Img" />
                    </div>
                    <div className="w-[60rem]">
                        <ul className="flex justify-center items-center flex-col">
                            {customerItems.map((customerItem: any, index: number) => (
                                <li key={index} className="dev-item w-[40rem] mb-[10rem]">
                                    <div className="text-5xl text-[#7081FF]">
                                        <FontAwesomeIcon icon={customerItem.icon} />
                                    </div>
                                    <h1 className="text-5xl font-bold text-[#2B2631] my-[3rem] leading-[3rem]">
                                        {customerItem.title}
                                    </h1>
                                    <span className="text-3xl text-[#2B2631] leading-[3rem]">
                                        {customerItem.content}
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
                </div>
            </div>
        </Fragment >
    );
};

export default Customers;