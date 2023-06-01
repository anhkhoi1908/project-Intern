import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Includes = () => {

    const includesList = [
        [
            "Forever free Test development",
            "Responsive technical support",
            "Comprehensive merchant dashboard",
            "Secure transactions",
            "Unlimited products (physical, digital, subscriptions)",
            "Unlimited product variants & discounts",
            "Unlimited domains/subdomains"
        ],
        [
            "Unlimited tax rates & customer accounts",
            "Customizable shopping cart",
            "Full set of APIs & webhooks",
            "6 payment gateways",
            "Custom payment gateway",
            "PayPal Express Checkout",
            "Custom shipping methods"
        ],
        [
            "Customizable invoices",
            "Multi-currency",
            "Abandoned carts recovery",
            "Real-time shipping estimates",
            "Inventory management",
            "Custom email templates",
            "TaxCloud & TaxJar integrations"
        ],
    ];

    return (
        <Fragment>
            <div className="includeds my-[12rem]" id=" includeds">
                <h1 className="text-center text-7xl font-bold mb-[14rem]">{"What's included"}</h1>
                <div className="w-[90%] flex items-center mx-auto">
                    <div className="flex">
                        {includesList.map((includesItem: Array<string>, index: number) => (
                            <ul key={index} className="">
                                {includesItem.map((includedsItemInner: string, index: number) => (
                                    <li key={index} className="included-field text-[1.8rem] text-[#757986] flex items-center mb-4 w-[32rem] mr-[22rem]">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="included-icon text-[#FFCC00] px-[0.4rem] py-[0.3rem] border-[0.3rem] text-[1.2rem] font-extrabold border-[#FFCC00] mr-[2rem] rounded-full" />
                                        {includedsItemInner}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Includes;