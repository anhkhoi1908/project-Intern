import { Fragment } from "react";
import { Link } from "react-router-dom";

const siteNavMore = () => {

    const siteNavMoreList = [
        "Security",
        "E-Commerce for Developers"
    ];

    return (
        <Fragment>
            <div className="site-nav__more" id="navMore">
                <ul className="bg-[#2B2631]">
                    {siteNavMoreList.map((siteNavMoreItem: any, index: number) => (
                        <li key={index}>
                            <Link
                                to=""
                                className="text-white text-[1.8rem] block border-b border-[#2F2D3A] py-12 px-[6rem] hover:border-b-[#FFCC00] "
                            >
                                {siteNavMoreItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default siteNavMore;