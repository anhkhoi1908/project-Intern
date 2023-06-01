import { Fragment } from "react";
import { Link } from "react-router-dom";
import BlogImage1 from "../../../assets/imgs/product1.webp";
import Logo from "../../../assets/imgs/logo.webp";
import style from "./sectionBlog.module.css";

const SectionBlog = () => {
    const sectionBlogContent = "Getting up to speed with all the latest technologies and trends can be tough. We got you: learn how to be a better developer, and subscribe to receive new content regularly.";

    return (
        <Fragment>
            <div className="section-blog bg-[#eee] py-20 my-[12rem]" id="section-blog">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <div className="w-3/5">
                        <h1 className="font-bold text-7xl mb-20">
                            {"Article of the week"}
                        </h1>
                        <div className="w-full bg-white rounded-3xl p-16">
                            <span className="text-[1.6rem] text-[#7A7B80]">{"Apr 11, 2022"}</span>
                            <Link to="">
                                <h1 className="text-3xl font-bold mt-4 hover:underline">
                                    {'Headless eCommerce: A Developer\'s Guide'}
                                </h1>
                            </Link>
                            <div className="flex my-14">
                                <img
                                    src={BlogImage1}
                                    alt="Img"
                                    width={60}
                                    height={60}
                                    className="rounded-full block relative"
                                />
                                <img
                                    src={Logo}
                                    alt="Img"
                                    className="bg-[#FFCC00] rounded-full w-[3rem] h-[3rem] absolute ml-16 mt-[-1.6rem]"
                                />
                                <div className="ml-10">
                                    <h3 className="text-[1.6rem]">{`François Lanthier Nadeau`}</h3>
                                    <span className="text-[1.4rem] text-[#7A7B80]">{`CEO, Snipcart`}</span>
                                </div>
                            </div>
                            <div className="text-[1.4rem]">
                                <button>
                                    <Link
                                        to=""
                                        className={`font-bold text-white px-4 py-1 block rounded-xl`}
                                        style={{ backgroundColor: '#65D291' }}
                                    >
                                        {"JAMSTACK"}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.sectionBlog_newsletter} w-1/3 flex flex-col justify-center items-center p-20 h-[50rem]`}>
                        <h1 className="text-4xl font-bold">{"Become a better developer"}</h1>
                        <p className="text-[1.6rem] my-10 text-center">{sectionBlogContent}</p>
                        <button>
                            <Link
                                to=""
                                className="block text-white bg-[#2B2631] text-[1.8rem] px-10 py-4 rounded-2xl mt-6"
                            >
                                {"Let's do it"}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SectionBlog;