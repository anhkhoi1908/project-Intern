import { Fragment } from "react";
import { Link } from "react-router-dom";

const siteNavFeatures = () => {

    const siteNavFeatureList = [
        "Physical Products",
        "Merchant Dashboard",
        "Customization",
        "Discounts",
        "Invoice",
        "Abondanded Carts",
        "Digital Products",
        "eCommerce Integration",
        "API & Webhooks",
        "Payment Gateways",
        "Multi-Currency",
        "Tax Management",
        "Customer Dashboard",
        "Quick Set Up",
        "Responsiveness",
        "Shipping",
        "Inventory Management"
    ];

    return (
        <Fragment>
            <div className="site-nav__features" id="navFeatures">
                <div className="nav-featured__btn bg-[#2E2D39] text-center py-12">
                    <Link to="">
                        <button className="text-[1.8rem] py-4 px-12 bg-[#FFCC00] text-[#2e2d39] rounded-2xl">
                            {"View All Featured"}
                        </button>
                    </Link>
                </div>
                <ul className="bg-[#2B2631]">
                    {siteNavFeatureList.map((siteNavFeatureItem: any, index: number) => (
                        <li key={index}>
                            <Link
                                to=""
                                className="text-white text-[1.8rem] block border-b border-[#2F2D3A] py-12 px-[6rem] hover:border-b-[#FFCC00] "
                            >
                                {siteNavFeatureItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default siteNavFeatures;