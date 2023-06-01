import { Fragment } from "react";
import style from "./toggle.module.css"

const ToggleSwitch = () => {

    const handleSwitch = () => {
        document.body.classList.toggle('dark');
    };

    return (
        <Fragment>
            <div id="wrapper" className="flex justify-center items-center">
                <input
                    type="checkbox"
                    name="switch-theme"
                    id="switch-theme"
                    className={`${style.switch_theme}`}
                    onClick={handleSwitch}
                />
            </div>
        </Fragment>
    )
}

export default ToggleSwitch;