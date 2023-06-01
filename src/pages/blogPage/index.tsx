import { Fragment } from "react";
import BlogProduct from "./blogProduct";
import SectionBlog from "./sectionBlog";
import BannerBlog from "./bannerBlog";
import Header from "../../components/layout/default/header";
import FooterInner from "../../components/layout/inner/footerInner";

const BlogPage = () => {
    return (
        <Fragment>
            <Header />
            <BannerBlog />
            <SectionBlog />
            <BlogProduct />
            <FooterInner />
        </Fragment>
    );
}

export default BlogPage;