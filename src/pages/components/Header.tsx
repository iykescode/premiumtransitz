import Preloader from "@/pages/components/Preloader";
import {useEffect, useState} from "react";

export default function Header() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const loadPreloader= async () =>
        {
            setShowPreloader(true);
            setTimeout(() => {
                setShowPreloader(false);
            }, 3000);
        }
        loadPreloader();
    }, [])

    return (
        <>
            {showPreloader && <Preloader />}

            {/* Mouse Cursor Start */}
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>

            {/*    Header */}
            <header id="stickyHeader">
                <div className="header-top-bar">
                    <div className="container">
                        <div className="bottom-bar">
                            <div className="logo">
                                <a href="#">
                                    <span style={{ color: "white", fontFamily: "monospace", fontSize: "x-large" }}>Premiumtransitz</span>
                                </a>
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="#home">home</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#vehiclemodels">Vehicle Models</a></li>
                                    <li><a href="#faq">faq</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/*    Header end*/}
        </>
    );
}