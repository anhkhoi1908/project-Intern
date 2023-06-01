import { Fragment, useState } from "react";
import Logo from "../../assets/imgs/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import SiteNavFeatures from "./siteNav-features";
import SiteNavResources from "./siteNav-resources";
import SiteNavMore from "./siteNav-more";
import { faFacebook, faInstagram, faGithub, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon(id: any, open: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-10 w-10 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
};

const NavTablet = () => {
    const [open, setOpen] = useState();

    const handleOpen = (value: any) => {
        setOpen(open === value ? false : value);
    };

    const [isOpen, setIsOpen] = useState(true);
    if (!isOpen) {
        return null;
    };

    const navList = [
        {
            navField: 'Features',
            icon: <Icon />,
            component: <SiteNavFeatures />,
            path: "#"
        },
        {
            navField: 'Resources',
            icon: <Icon />,
            component: <SiteNavResources />,
            path: "#"
        },
        {
            navField: 'Pricing',
            path: "/pricingPage"
        },
        {
            navField: 'Blog',
            path: "/blogPage"
        },
        {
            navField: 'More',
            icon: <Icon />,
            component: <SiteNavMore />,
            path: "#"
        },
    ];

    const buttonList = [
        {
            name: 'Sign in',
            background: '#2B2631',
            path: '/login',
            color: '#fff'
        },
        {
            name: 'Get started',
            background: '#FFCC00',
            path: 'register',
            color: '#2B2631'
        },
    ];

    const socialList = [
        {
            icon: faFacebook,
            path: 'https://www.facebook.com/khoi.hoangle.1'
        },
        {
            icon: faInstagram,
            path: 'https://www.instagram.com/_hoangleanhkhoi_/'
        },
        {
            icon: faGithub,
            path: 'https://github.com/anhkhoi1908'
        },
        {
            icon: faTiktok,
            path: 'https://www.tiktok.com/@_akoiiii_'
        },
        {
            icon: faYoutube,
            path: 'https://www.youtube.com/channel/UC1lbePoPaDBil9ejRotVUIQ'

        },
    ];


    return (
        <Fragment>
            <div className="nav-tablet bg-white pb-[6.4rem] absolute left-0 top-0 z-20 w-full cursor-auto" id="nav-tablet">
                <header className="flex items-center justify-between h-[10rem] px-[6rem]">
                    <div className="nav-item flex justify-between items-center w-full">
                        <Link
                            to="/homePage"
                            className="text-[#2e2d39] flex items-center"
                            aria-label="Go To HomePage"
                        >
                            <img
                                src={Logo}
                                alt="Logo Page"
                                className="bg-white p-3 rounded-full"
                                style={{ width: '6rem' }}
                            />
                            <span className="text-[1.8rem] ml-10 tracking-[0.5rem]">
                                {"SNIPCART"}
                            </span>
                        </Link>
                        <div className="text-[#2e2d39] text-5xl cursor-pointer z-30 py-4">
                            <button onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    </div>
                </header>
                <div>
                    <ul>
                        {navList.map((navItem: any, index: number) => (
                            <li key={index}>
                                <Link to={navItem.path}>
                                    <Accordion open={open === index} icon={navItem.icon} >
                                        <AccordionHeader
                                            onClick={() => handleOpen(index)}
                                            className="text-[1.8rem] px-[6rem] py-[2rem] text-[#2B2631]"
                                        >
                                            {navItem.navField}
                                        </AccordionHeader>
                                        <AccordionBody>
                                            {navItem.component}
                                        </AccordionBody>
                                    </Accordion>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-[10rem]">
                    <div className="flex flex-col justify-center items-center">
                        {buttonList.map((buttonItem: any, index: number) => (
                            <button key={index} className="inline mb-6">
                                <Link
                                    to={buttonItem.path}
                                    style={{
                                        backgroundColor: `${buttonItem.background}`,
                                        color: `${buttonItem.color}`
                                    }}
                                    className="inline-block text-[1.8rem] py-4 w-[30rem] rounded-2xl"
                                >
                                    {buttonItem.name}
                                </Link>
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-14">
                        <span className="text-[1.8rem] text-[#2B2631]">{'Stalk us here: '}</span>
                        <ul className="flex">
                            {socialList.map((socialItem: any, index: number) => (
                                <li key={index}>
                                    <Link to={socialItem.path}>
                                        <FontAwesomeIcon icon={socialItem.icon} className="text-5xl mx-4 text-[#2B2631]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NavTablet;