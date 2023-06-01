import { Fragment } from "react";

const MenuResource = () => {

    const resourceList = [
        ["Community & Integration", "FAQ"],
        ["FAQ", "Compare"],
        ["Support Forum"]
    ];

    return (
        <Fragment>
            <div className="nav-resource w-[100rem] bg-[#2e2d39] rounded-[3rem] pt-[4rem] overflow-y-hidden absolute   top-full left-[50%] translate-x-[-50%] z-20" id="nav-resource">
                <ul className="flex justify-evenly items-center pb-[2rem]">
                    {resourceList.map((resourceItem: Array<string>, index: number) => (
                        <li key={index}>
                            {resourceItem.map((resourceItemInner: string, index: number) => (
                                <h3
                                    key={index}
                                    className="text-[1.8rem] text-white cursor-pointer mb-[2rem] border pr-[10rem] rounded-3xl py-4 pl-8 border-[#8F959B] hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:text-black duration-300"
                                >
                                    {resourceItemInner}
                                </h3>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default MenuResource;