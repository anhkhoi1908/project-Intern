import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

const FooterInner = () => {
    const items = ["Terms of Service", "About Snipcar", "Status", "Francais"];

    const inputChecks = [
        {
            type: 'checkbox',
            id: 'Tutorials & editorials',
            value: 'Tutorials & editorials',
            name: 'interestContent',
            label: 'Tutorials & editorials'
        },
        {
            type: 'checkbox',
            id: 'Product updates',
            value: 'Product updates',
            name: 'interestContent',
            label: 'Product updates'
        },
    ];

    const iconList = [{ icon: faFacebook, }, { icon: faInstagram }, { icon: faTwitter }, { icon: faTiktok }, { icon: faYoutube }];

    return (
        <Fragment>
            <footer className="w-full h-[60rem] relative" id="footer">
                <div className="footer--site-signup h-[35rem] w-[90%] bg-[#eee] rounded-3xl flex justify-center items-center flex-col m-auto z-10 relative">
                    <h1 className="footer-title text-[3.8rem] font-bold text-center w-[80rem] leading-[6rem] text-[#2b2631]">
                        {"36 000+ geeks are getting our monthly newsletter: join them!"}
                    </h1>
                    <div className="footer--site-signup__btn my-[3rem]">
                        <div className="flex items-center justify-center w-[80rem] mb-[3rem]">
                            <label className="bg-[#DEDDD5] text-[1.8rem] py-2 px-10 inline-block rounded-l-full">
                                {"Email"}
                            </label>
                            <input type="email" name="email" id="email" className="bg-[#DEDDD5] outline-none px-6 py-2 text-[1.8rem] w-1/2" />
                            <button className="bg-[#2B2631] text-white text-[1.8rem] py-2 px-10 rounded-r-full">{"Count me in!"}</button>
                        </div>
                        <ul className="flex items-center justify-center">
                            {inputChecks.map((inputCheckItem: any, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-center mr-14"
                                >
                                    <label htmlFor={inputCheckItem.id} className="text-[1.8rem] cursor-pointer pl-2 hover:text-[#6678FF] duration-100 flex items-center">
                                        <input
                                            type={inputCheckItem.type}
                                            name={inputCheckItem.name}
                                            id={inputCheckItem.id}
                                            value={inputCheckItem.value}
                                            defaultChecked={true}
                                            className={`w-[2.5rem] h-[2.5rem] cursor-pointer mr-4 relative before:content-[""] before:block before:absolute before:w-[2.6rem] before:h-[2.6rem] before:t-0 before:l-0 before:bg-white before:border-2 before:border-[#5F44A7] before:hover:border-[#5F44A7] before:rounded-[0.3rem] checked:after:content-[""] checked:after:block checked:after:absolute checked:after:w-[0.8rem] checked:after:h-[1.6rem] checked:after:border checked:after:border-[#5F44A7] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-t-0 checked:after:border-l-0 checked:after:top-[0.2rem] checked:after:left-[0.9rem] checked:after:rotate-45 checked:after:hover:border-[#5F44A7] checked:after:duration-100`}
                                        />
                                        {inputCheckItem.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="footer-text text-[1.6rem]">
                        {"Thanks for subscribing!"}
                    </p>
                </div>
                <div className="footer--site-footer w-full h-[50rem] bg-[#2b2631] absolute top-[10rem]">
                    <div className={`footer--site-nexFooter absolute w-[90%] top-1/2 left-[5%] flex justify-between py-[5rem] border-b border-[#aaa]`}>
                        <ul className="footer--site__nav flex">
                            {items.map((items: any, index: number) => (
                                <li
                                    key={index}
                                    className={`footer--site__nav-item footer-text text-[1.8rem] mr-[3rem] text-white hover:text-[#FFCC00] duration-300`}
                                >
                                    <Link to="">{items}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="footer--site__social flex items-center">
                            <span className="footer-text text-white text-[1.8rem] ml-[5rem]">
                                {"Stalk us here :"}
                            </span>
                            {iconList.map((iconItem: any, index: number) => (
                                <li key={index}>
                                    <Link to="" className="footer-icon text-white text-[2rem] ml-[3rem]">
                                        <FontAwesomeIcon icon={iconItem.icon} />
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

export default FooterInner;