import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../../../features/toggle";
import Logo from "../../../../assets/imgs/logo.webp";

const HeaderInner = () => {
    return (
        <Fragment>
            <header className="w-full mx-auto border-b border-[#ccc]">
                <div className="viewDemo-header__sub text-[1.6rem] bg-black text-white fixed w-full z-20">
                    <div className="w-4/5 flex justify-between mx-auto py-6">
                        <Link to="/homePage">
                            <span>
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-[1rem]" />
                                {"Snipcart.com"}
                            </span>
                        </Link>
                        <span>{"Snipcart-powered demo store."}</span>
                    </div>
                </div>
                <div className="viewDemo-header__main w-4/5 mx-auto pt-[5.4rem]">
                    <div className="flex justify-between text-left">
                        <div className="nav-item flex items-center">
                            <Link
                                to="/homePage"
                                className="flex items-center"
                                aria-label="Go To HomePage"
                            >
                                <img
                                    src={Logo}
                                    alt="Logo Page"
                                    className="bg-white p-3 rounded-full"
                                    style={{ width: '6rem' }}
                                />
                                <span className="text-[3rem] ml-10 font-bold">
                                    {"SnipCart"}
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-between items-center py-14">
                            <ToggleSwitch />
                            <div className="text-[1.8rem] font-bold ml-[2rem]">
                                <Link to="">{"Login"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default HeaderInner;