import { Fragment, useState } from "react";
import Logo from "../../../../assets/imgs/logo.webp";
import { Link } from "react-router-dom";
import NavFeatures from "./menuFeatures";
import NavResource from "./menuResource"
import NavMore from "./menuMore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavTablet from "../../../../pages/navTablet";

const Header = () => {

    const [showNavFeatures, setShowNavFeatures] = useState(false);
    const handleClickShowNavFeatures = (e: any) => {
        e.preventDefault();
        setShowNavFeatures(!showNavFeatures);
    };

    const [showNavResource, setShowNavResource] = useState(false);
    const handleClickShowNavResource = (e: any) => {
        e.preventDefault();
        setShowNavResource(!showNavResource);
    };

    const [showNavMore, setShowNavMore] = useState(false);
    const handleClickShowNavMore = (e: any) => {
        e.preventDefault();
        setShowNavMore(!showNavMore);
    };

    const [showNavTablet, setShowNavTablet] = useState(false);
    const handleClickShowNavTablet = (e: any) => {
        e.preventDefault();
        setShowNavTablet(!showNavTablet);
    };

    const navList = [
        {
            field: 'Features',
            icon: faChevronDown,
            action: handleClickShowNavFeatures,
            state: showNavFeatures,
            component: <NavFeatures />,
            path: '#'
        },
        {
            field: 'Resources',
            icon: faChevronDown,
            action: handleClickShowNavResource,
            state: showNavResource,
            component: <NavResource />,
            path: '#'
        },
        {
            field: 'Pricing',
            path: '/pricingPage'
        },
        {
            field: 'Blog',
            path: '/blogPage'
        },
        {
            field: 'More',
            icon: faChevronDown,
            action: handleClickShowNavMore,
            state: showNavMore,
            component: <NavMore />,
            path: '#'
        },
    ];

    return (
        <Fragment>
            <header className="header h-[10rem] bg-[#2e2d39] flex items-center justify-center px-[6rem] relative" id="header">
                <nav className="nav-list flex items-center justify-between w-full">
                    <div className="nav-item">
                        <Link
                            to="/homePage"
                            className="text-white flex items-center"
                            aria-label="Go To HomePage"
                        >
                            <img
                                src={Logo}
                                alt="Logo Page"
                                className="bg-white p-3 rounded-full"
                                style={{ width: '6rem' }}
                            />
                            <span className="text-[1.8rem] ml-10 tracking-[0.5rem]">
                                {"SNIPCART"}
                            </span>
                        </Link>
                    </div>
                    <ul className="nav-item flex">
                        {navList.map((navItem: any, index: number) => (
                            <li
                                key={index}
                                onClick={navItem.action}
                                className={`text-[1.8rem] text-white mx-12 hover:text-[#FFCC00] duration-300 flex items-center`}
                            >
                                <Link to={navItem.path}>
                                    {navItem.field}
                                    <FontAwesomeIcon icon={navItem.icon} className="text-xl ml-4" />
                                </Link>
                                {navItem.state && navItem.component}
                            </li>
                        ))}
                    </ul>
                    <div className="nav-item flex items-center">
                        <Link to="/login">
                            <span
                                className="text-[1.8rem] cursor-pointer text-white mx-10 hover:text-[#FFCC00] duration-300"
                            >
                                {"Sign in"}
                            </span>
                        </Link>

                        <Link to="/register">
                            <span
                                className="text-[1.8rem] cursor-pointer bg-[#FFCC00] px-[4rem] py-5 rounded-2xl hover:bg-transparent hover:text-[#FECB00] border-[0.2rem] border-[#FECB00] duration-300"
                            >
                                {"Get started"}
                            </span>
                        </Link>
                    </div>
                    <div className="nav-item nav-item__icon text-white text-5xl cursor-pointer hidden">
                        <button onClick={handleClickShowNavTablet}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        {showNavTablet && <NavTablet />}
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

export default Header;
