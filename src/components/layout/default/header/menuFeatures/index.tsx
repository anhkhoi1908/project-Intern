import { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuFeatured = () => {
    const featuresList = [
        [
            "Physical Products",
            "Merchant Dashboard",
            "Customization",
            "Discounts",
            "Invoice",
            "Abondanded Carts"
        ],
        [
            "Digital Products",
            "eCommerce Integration",
            "API & Webhooks",
            "Payment Gateways",
            "Multi-Currency",
            "Tax Management"
        ],
        [
            "Customer Dashboard",
            "Quick Set Up",
            "Responsiveness",
            "Shipping",
            "Inventory Management"]
    ];

    return (
        <Fragment>
            <div className="nav-features w-[100rem] bg-[#2e2d39] rounded-[3rem] pt-[4rem] overflow-y-hidden absolute   top-full left-[50%] translate-x-[-50%] z-20" id="nav-features">
                <ul className="flex justify-evenly items-center pb-[2rem]">
                    {featuresList.map((featureItem: Array<string>, index: number) => (
                        <li key={index}>
                            {featureItem.map((featureItemInner: string, index: number) => (
                                <h3
                                    key={index}
                                    className="text-[1.8rem] text-white cursor-pointer mb-[3rem] hover:text-[#FFCC00] duration-300"
                                >
                                    {featureItemInner}
                                </h3>
                            ))}
                        </li>
                    ))}
                </ul>
                <div className="nav-featured__btn bg-[#2b2631] text-center py-8">
                    <Link to="">
                        <button className="text-[1.8rem] py-4 px-14 bg-[#FFCC00] text-[#2e2d39] rounded-2xl">
                            {"View All Featured"}
                        </button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default MenuFeatured;