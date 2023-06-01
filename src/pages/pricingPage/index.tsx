import React, { Fragment } from "react";
import Header from "../../components/layout/default/header";
import Footer from "../../components/layout/default/footer";
import BannerPricing from "./bannerPricing";
import Includes from "./includes";

const PricingPage = () => {
    return (
        <Fragment>
            <Header />
            <BannerPricing />
            <Includes />
            <Footer />
        </Fragment>
    );
};

export default PricingPage;