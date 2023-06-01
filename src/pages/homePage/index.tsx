import { Fragment } from "react";
import Header from "../../components/layout/default/header";
import Footer from "../../components/layout/default/footer";
import About from "./about";
import Banner from "./banner";
import Customers from "./customer";
import Developers from "./developers";
import Merchants from "./merchants";
import Thinking from "./thinking";
import Tools from "./tools";
import BackToTop from "../../features/backToTop";

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <BackToTop />
            <Banner />
            <About />
            <Developers />
            <Tools />
            <Merchants />
            <Customers />
            <Thinking />
            <Footer />
        </Fragment>
    );
};

export default HomePage;