export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <a href="mailto:hello@premiumtransitz.com">hello@premiumtransitz.com</a>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">X (Twitter)</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="footer-information">
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="subscribe-letter">
                                    <h3>Receive notifications about the delivery of car services</h3>
                                    <p>Subscribe newsletter and get recent news and offers.</p>
                                    <form className="get-subscribee" id="subscribe-form">
                                        <input type="email" placeholder="name@email.com" />
                                        <button className="btn"><span><span>Get Notified</span></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="information-link">
                                    <h3>information</h3>
                                    <ul>
                                        <li><a href="#home">home</a></li>
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#vehiclemodels">Vehicle Models</a></li>
                                        <li><a href="#faq">Faq</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay=".9s">
                                <div className="information-link">
                                    <h3>Contact</h3>
                                    <ul>
                                        <li>
                                            <a href="callto:+1(424)437-9812">+1 (424) 437-9812</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <a href="#home">
                            <span style={{ color: "white", fontFamily: "monospace", fontSize: "x-large" }}>Premiumtransitz</span>
                        </a>
                        <p>© 2026 Premiumtransitz by <a target="_blank" href="https://www.iykescode.com" style={{ color: "white" }}>Iykescode <i className="fa-solid fa-external-link"></i> </a>. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Progress */}
            <div id="progress">
                <span id="progress-value"><i className="fa-solid fa-arrow-up"></i></span>
            </div>
        </>
    );
}