import { Fragment } from "react";
import "./footer.module.css";
import { Link } from "react-router-dom";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const footerNavList = [
        {
            filed: 'Terms of Service',
            path: '/terms-of-service'
        },
        {
            filed: 'About Snipcar',
            path: '/about-snipcar'
        },
        {
            filed: 'Status',
            path: '/status'
        },
        {
            filed: 'Francais',
            path: '/francais'
        }
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
            <footer className="w-full h-[60rem] relative" id="footer">
                <div className="footer--site-signup h-[35rem] w-[90%] bg-[#FFCC00] rounded-3xl flex justify-center items-center flex-col m-auto z-10 relative">
                    <h1 className="footer-title text-[4.8rem] font-bold text-center w-[60rem] leading-[6rem] text-[#2b2631]">
                        {"Join thousands of developers & merchants"}
                    </h1>
                    <div className="footer--site-signup__btn my-[3rem]">
                        <Link to="/register">
                            <button
                                className="footer-btn text-white py-4 px-[4.4rem] bg-[#2b2631] text-[1.8rem] rounded-3xl hover:bg-transparent hover:text-[#2b2631] border-[0.3rem] border-[#2b2631] duration-300"
                            >
                                {"Try for free"}
                            </button>
                        </Link>
                    </div>
                    <p className="footer-text text-[1.6rem]">
                        {"Testing is forever free, no credit card required"}
                    </p>
                </div>
                <div className="footer--site-footer w-full h-[50rem] bg-[#2b2631] absolute top-[10rem]">
                    <div className={`footer--site-nexFooter absolute w-[90%] top-1/2 left-[5%] flex justify-between py-[5rem] ${style.footer_line}`}>
                        <ul className="footer--site__nav flex">
                            {footerNavList.map((footerNavItem: any, index: number) => (
                                <li
                                    key={index}
                                    className={`footer--site__nav-item footer-text text-[1.8rem] mr-[3rem] text-white hover:text-[#FFCC00] duration-300`}
                                >
                                    <Link to={footerNavItem.path}>{footerNavItem.filed}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="footer--site__social flex items-center">
                            <span className="footer-text text-white text-[1.8rem] ml-[5rem]">
                                {"Stalk us here :"}
                            </span>
                            {socialList.map((socialItem: any, index: number) => (
                                <li key={index}>
                                    <Link to={socialItem.path} className="footer-icon text-white text-[2rem] ml-[3rem]">
                                        <FontAwesomeIcon icon={socialItem.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="site-footer__bottom footer-text absolute w-[90%] bottom-0 left-[5%] flex justify-between py-[5rem] text-[#747A8B] text-[1.8rem]">
                        <span>{"© All rights reserved, Snipcart inc. 2023"}</span>
                        <div className="footer-site__credit flex items-center">
                            <FontAwesomeIcon icon={faFlag} />
                            <span className="ml-8">{"Built in Canada"}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment >
    );
};

export default Footer;