import { Fragment } from "react";
import style from "./viewDemo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ProductList from "../api/viewDemo";
import HeaderInner from "../../components/layout/inner/headerInner";


const ViewDemoPage = () => {
    const iconList = [faFacebook, faTwitter, faGithub];

    return (
        <Fragment>
            <HeaderInner />
            <div className="products mt-[10rem]" id="products">
                <ul className="product-list">
                    {ProductList.map((ProductItem: any, index: number) => (
                        <li
                            key={index}
                            className={`${style.product_item} product-item flex justify-between items-center w-4/5 h-[40rem] mx-auto mb-[10rem]`}
                        >
                            <div className={`w-1/2 product-item--content`}>
                                <h1 className="text-7xl font-semibold leading-[5rem] w-4/5">
                                    {ProductItem.title}
                                </h1>
                                <p className="text-4xl mt-[4rem] mb-[3rem] leading-[4rem]">
                                    {ProductItem.des}
                                </p>
                                <ul className="flex mb-[3rem]">
                                    <li className="flex flex-col w-[7rem] mr-10">
                                        <span className="text-xl text-[#747474] font-bold mb-[1rem]">
                                            {"QUANTITY"}
                                        </span>
                                        <input
                                            type="number"
                                            name="number"
                                            id="quantity"
                                            min="1"
                                            defaultValue="1"
                                            className="border border-[#747474] text-3xl p-2 bg-transparent"
                                        />
                                    </li>
                                    <li className="flex flex-col w-1/3">
                                        <span className="text-xl text-[#747474] font-bold mb-[1rem]">
                                            {"FORMAT"}
                                        </span>
                                        <select
                                            name="format"
                                            id="format"
                                            className="border border-[#747474] text-3xl p-[0.3rem] bg-transparent"
                                        >
                                            <option value="physical">{"Physical copy"}</option>
                                            <option value="digital">{"Digital copy (.jpeg)"}</option>
                                        </select>
                                    </li>
                                </ul>
                                <div className="flex items-center">
                                    <span className="text-4xl font-bold mr-10">
                                        {ProductItem.price}
                                    </span>
                                    <button className="w-1/3 bg-[#133986] text-white text-2xl font-bold tracking-wider py-6 px-8 rounded-xl">
                                        {"ADD TO CART"}
                                    </button>
                                </div>
                            </div>
                            <img
                                src={ProductItem.img}
                                alt="Img"
                                className="product-item--img w-1/2 h-full rounded-xl"
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="w-full border-t border-[#747474] py-10">
                <div className="w-4/5 mx-auto flex justify-between items-center">
                    <span className="text-[1.6rem]">
                        {"NUXT.JS STATIC SITE WITH SNIPCART E-COMMERCE."}</span>
                    <ul className="flex">
                        {iconList.map((iconItem: any, index: number) => (
                            <li
                                key={index}
                                className="ml-10"
                            >
                                <Link to="">
                                    <FontAwesomeIcon icon={iconItem} className="text-3xl hover:text-[aqua] duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </Fragment >
    );
};

export default ViewDemoPage;