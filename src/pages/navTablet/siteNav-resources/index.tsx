import { Fragment } from "react";
import { Link } from "react-router-dom";

const siteNavResources = () => {

    const siteNavResourceList = [
        "Community & Integration",
        "Documentation",
        "FAQ",
        "Compare",
        "Support Forum"
    ];

    return (
        <Fragment>
            <div className="site-nav__resources" id="navResources">
                <ul className="bg-[#2B2631]">
                    {siteNavResourceList.map((siteNavResourceItem: any, index: number) => (
                        <li key={index}>
                            <Link
                                to=""
                                className="text-white text-[1.8rem] block border-b border-[#2F2D3A] py-12 px-[6rem] hover:border-b-[#FFCC00] "
                            >
                                {siteNavResourceItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default siteNavResources;