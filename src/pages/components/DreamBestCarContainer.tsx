export default function DreamBestCarContainer() {
    return (
        <section className="gap">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="car-here img-hover reveal1 it-reveal-animation">
                            <figure>
                                <img src="/assets/img/cam.avif" alt="img" />
                            </figure>
                            <div className="count-style">
                                <div className="count-text">
                                    <h3 data-max="274"><sup>k</sup></h3>
                                    <span>Satisfied Clients</span>
                                </div>
                                <div className="count-text">
                                    <h3 data-max="40"><sup>%</sup></h3>
                                    <span>Client Referrals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="heading two">
                            <span>🚗 Dream Rent a Car</span>
                            <h2>Find Your Perfect Ride <span>Here</span></h2>
                            <p>We provide reliable and comfortable private car hire tailored to your needs. Whether you’re booking for daily travel, special occasions, or airport trips, we make the process simple, smooth, and stress-free.
                                Our goal is to give you a hassle-free experience from start to finish — with clear communication, flexible options, and vehicles you can depend on.</p>
                        </div>
                        <ul className="list-style">
                            <li>Easy booking process</li>
                            <li>Fast confirmation via text or email</li>
                            <li>Clean, well-maintained vehicles</li>
                            <li>Reliable and professional service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}