import { Fragment } from "react";
import Tool0 from "../../../assets/imgs/tool0.svg";
import Tool1 from "../../../assets/imgs/tool1.svg";
import Tool2 from "../../../assets/imgs/tool2.svg";
import Tool3 from "../../../assets/imgs/tool3.svg";
import Tool4 from "../../../assets/imgs/tool4.svg";
import Tool5 from "../../../assets/imgs/tool5.svg";
import Tool6 from "../../../assets/imgs/tool6.svg";
import Tool7 from "../../../assets/imgs/tool7.svg";
import Tool8 from "../../../assets/imgs/tool8.svg";
import Tool9 from "../../../assets/imgs/tool0.svg";

const Tools = () => {
    const allTools = [
        Tool0, Tool1, Tool2, Tool3, Tool4, Tool5, Tool6, Tool7, Tool8, Tool9
    ];

    return (
        <Fragment>
            <div id="tools" className="tools">
                <h1 className="tool-title text-5xl text-[#515767] text-center mb-[8rem] mt-[4rem]">
                    {"Works with your favorite tools"}
                </h1>
                <ul className="flex justify-center pb-[10rem]">
                    {allTools.map((toolItem: string, index: number) => (
                        <img
                            key={index}
                            src={toolItem}
                            width={60}
                            height={60}
                            alt={`Tool ${index + 1}`}
                            className="tool-item mx-[2rem]"
                        />
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default Tools;