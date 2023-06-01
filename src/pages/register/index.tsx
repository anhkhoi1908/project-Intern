import { Fragment } from "react"
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./register.module.css";

const Register = () => {

    const profits = ["Snipcart is forever free in Test mode", "No credit card required"];

    const inputCheckList = [
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

    return (
        <Fragment>
            <div className="register bg-[#2E3233] w-full min-h-[79.2rem] select-none relative" id="register">
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
                        <span>{"Already a user?"}</span>
                        <Link to="/login">
                            <span
                                className="text-black ml-8 py-4 px-8 bg-[#FECB00] hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] rounded-3xl duration-300 cursor-pointer select-none"
                            >
                                {'LOG IN'}
                            </span>
                        </Link>
                    </div>
                </header>
                <div className="register-body w-[66%] flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <div className="register-content__left text-white w-1/2">
                        <h1 className="register-title text-7xl font-thin mb-4">{"Ready to take"}</h1>
                        <h1 className="register-title text-7xl font-thin">{"Snipcart for a ride?"}</h1>
                        <ul className="mt-20">
                            {profits.map((profit: string, index: number) => (
                                <li
                                    key={index}
                                    className="text-[1.8rem] font-thin flex items-center mb-4"
                                >
                                    <FontAwesomeIcon icon={faCheck}
                                        className="p-2 bg-[#FECB00] rounded-full text-black text-[1.4rem] mr-4" />
                                    {profit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-black bg-white h-full px-8 pt-8 pb-20 rounded-3xl">
                        <div className="flex justify-center items-center bg-white rounded-2xl w-[50rem] mb-[3rem] border border-[#ccc]">
                            <FontAwesomeIcon icon={faEnvelope}
                                className={`${style.loginBorder_RightInput} text-[#2E3233] bg-white text-4xl p-6 rounded-l-[2rem]`} />
                            <div className="w-full">
                                <div className="relative w-full min-w-[20rem]">
                                    <input
                                        className="login-input text-black peer h-full w-full bg-transparent px-6 py-6 outline outline-0 text-[1.6rem]" placeholder="Email" name="Email" type="email" id="email-input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-[1.6rem] mb-4 font-bold">
                                    {"Subscribe to newsletter:"}
                                </h3>
                                <ul className="flex flex-col justify-center">
                                    {inputCheckList.map((inputCheckItem: any, index: number) => (
                                        <li
                                            key={index}
                                            className="flex justify-start items-center"
                                        >
                                            <input
                                                type={inputCheckItem.type}
                                                name={inputCheckItem.name}
                                                id={inputCheckItem.id}
                                                value={inputCheckItem.value}
                                                defaultChecked={true}
                                                className="mr-3 w-[1.5rem] h-[1.5rem]"
                                            />
                                            <label htmlFor={inputCheckItem.id} className="text-[1.6rem]">{inputCheckItem.label}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button className="text-[1.8rem] bg-[#FECB00] rounded-2xl text-black px-8 py-2 hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] duration-300">
                                    {"SIGN UP FREE"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;