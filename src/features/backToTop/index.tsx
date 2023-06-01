import { Fragment, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 800) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fragment>
            {showButton && (
                <button
                    onClick={handleScrollToTop}
                    className="back-to-top"
                    style={{
                        position: 'fixed',
                        bottom: '5rem',
                        right: '2.5rem',
                        zIndex: '20',
                        color: '#fff',
                        backgroundColor: '#fff',
                        padding: '1.5rem',
                        border: '0.2rem',
                        borderRadius: '50%',
                        borderColor: "#fff",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        style={{
                            fontSize: '2.25rem',
                            lineHeight: '2.25rem',
                            color: '#2E2F42'
                        }}
                    />
                </button>
            )}
        </Fragment>
    );
};

export default BackToTop;