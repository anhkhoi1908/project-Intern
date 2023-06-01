import { Fragment } from "react";
import blockProductList from "../../api/block";
import { Link } from "react-router-dom";
import style from "./blogProduct.module.css";

const BlogProduct = (currentItems: any) => {
    return (
        <Fragment>
            <div className="blog-product">
                <div className="w-[90%] mx-auto mb-[16rem]">
                    {blockProductList.map((blogProductItem: any, index: number) => (
                        <ul key={index} className="flex justify-between mb-[6rem]">
                            {blogProductItem.map((blogProductItemInner: any, index: number) => (
                                <li
                                    key={index}
                                    className={`${style.blogProduct_Item} w-[44rem] px-14 py-6 hover:scale-110 duration-300 rounded-3xl`}
                                >
                                    <span className="text-[1.6rem] text-[#7A7B80]">{blogProductItemInner.date}</span>
                                    <Link to="">
                                        <h1 className="text-3xl font-bold mt-4 hover:underline">
                                            {blogProductItemInner.title}
                                        </h1>
                                    </Link>
                                    <div className="flex my-14">
                                        <img
                                            src={blogProductItemInner.image}
                                            alt="Img"
                                            width={60}
                                            height={60}
                                            className="rounded-full block relative"
                                        />
                                        <img
                                            src={blogProductItemInner.logo}
                                            alt="Img"
                                            className="bg-[#FFCC00] rounded-full w-[3rem] h-[3rem] absolute ml-16 mt-[-1.6rem]"
                                        />
                                        <div className="ml-10">
                                            <h3 className="text-[1.6rem]">{blogProductItemInner.name}</h3>
                                            <span className="text-[1.4rem] text-[#7A7B80]">{blogProductItemInner.position}</span>
                                        </div>
                                    </div>
                                    <div className="text-[1.4rem]">
                                        <button>
                                            <Link
                                                to=""
                                                className={`font-bold text-white px-4 py-1 block rounded-xl`}
                                                style={{ backgroundColor: `${blogProductItemInner.color}` }}
                                            >
                                                {blogProductItemInner.taxonomy}
                                            </Link>
                                        </button>
                                        <button className="ml-8">
                                            <Link
                                                to="">{blogProductItemInner.sub_catgory}
                                            </Link>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default BlogProduct;