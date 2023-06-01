import { Fragment } from "react";

const MenuMore = () => {
    const moreList = ["Security", "E-Commerce For Developers"];

    return (
        <Fragment>
            <div className="nav-features w-[30rem] bg-[#2e2d39] rounded-[3rem] pt-[4rem] overflow-y-hidden absolute   top-full left-[50%] translate-x-[-50%] z-20" id="nav-features">
                <div className="flex justify-evenly items-center pb-[2rem]">
                    <ul className="nav-featured__item-first">
                        {moreList.map((moreItem: string, index: number) => (
                            <li
                                key={index}
                                className={`text-[1.8rem] text-white cursor-pointer mb-[3rem] hover:text-[#FFCC00] duration-300`}
                            >
                                {moreItem}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default MenuMore;