import { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import style from "./login.module.css";

const Login = () => {

    return (
        <Fragment>
            <div className="login bg-[#2E3233] w-full h-[79.2rem]" id="login">
                <header className="login-header flex justify-between items-center h-[10rem] px-[8rem]">
                    <div className="">
                        <Link
                            to="/homePage"
                            className="text-white flex items-center"
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
                    </div>
                    <div className="text-white text-3xl">
                        <span>{"Don't have an account?"}</span>
                        <Link to="/register">
                            <span
                                className="text-black ml-8 py-4 px-8 bg-[#FECB00] hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] rounded-3xl duration-300 select-none cursor-pointer"
                            >
                                {"SIGN UP"}
                            </span>
                        </Link>
                    </div>
                </header>
                <form className="text-white flex flex-col justify-center items-center w-full">
                    <div className="loginForm-icon text-[5rem]">
                        <FontAwesomeIcon icon={faDoorOpen} />
                    </div>
                    <h1 className={`text-[5rem] font-thin py-14 mb-[4rem] ${style.loginBorder_Bottom}`}>{"Login"}</h1>
                    <div className="mt-[4rem]">
                        <div className="flex justify-center items-center bg-white rounded-2xl w-[50rem] mb-[3rem]">
                            <FontAwesomeIcon icon={faEnvelope}
                                className={`${style.loginBorder_RightInput} text-[#2E3233] bg-white text-5xl p-6 rounded-l-[2rem]`} />
                            <div className="w-full">
                                <div className="relative w-full min-w-[200px]">
                                    <input
                                        className="login-input text-black peer h-full w-full bg-transparent px-6 py-4.5 outline outline-0 text-[1.6rem]"
                                        placeholder="Email"
                                        name="Email"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-white rounded-2xl w-[50rem]">
                            <FontAwesomeIcon icon={faLock}
                                className={`${style.loginBorder_RightInput} text-[#2E3233] bg-white text-5xl py-6 px-[1.7rem] rounded-l-[2rem]`} />
                            <div className="w-full">
                                <div className="relative w-full min-w-[200px]">
                                    <input
                                        className="login-input text-black peer h-full w-full bg-transparent px-6 py-4.5 outline outline-0 text-[1.6rem]"
                                        placeholder="Password"
                                        name="Password"
                                        type="password"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[50rem] mt-[4rem]">
                        <div className="flex">
                            <h3 className="text-[1.6rem]">{"You lost your password? "}
                                <Link to="" className="underline">{"Get it back"}</Link>
                            </h3>
                        </div>
                        <div>
                            <button className="text-[1.8rem] bg-[#FECB00] rounded-2xl text-black px-8 py-4 hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] duration-300">
                                {"LOGIN"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Login;