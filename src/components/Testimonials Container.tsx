export default function TestimonialsContainer() {
    return (
        <section className="gap no-top about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="heading two">
                            <span>Testimonials</span>
                            <h2>What People Say <span>About Us</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="review">
                            <img alt="img" src="/assets/img/google-img.png"/>
                            <ul className="star">
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star-half"></i></li>
                                <li><h6>(4.5) </h6></li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-9">
                        <div className="swiper review-clint-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="review-clint">
                                        <p>“Great experience from start to finish. The car was very clean and comfortable, and the driver was professional and friendly.
                                            Communication was smooth the whole time. Highly recommend!” </p>
                                        <div className="man">
                                            <img src="https://placehold.co/70x70" alt="img"/>
                                            <div>
                                                <h5>James Soomekh</h5>
                                                <h6>Hollywood, CA</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="review-clint">
                                        <p>“Really reliable service. The driver was on time, drove safely, and made the ride very comfortable.
                                            Booking was easy and everything went exactly as expected.” </p>
                                        <div className="man">
                                            <img src="https://placehold.co/70x70" alt="img"/>
                                            <div>
                                                <h5>Michael Chuks</h5>
                                                <h6>Los Angeles, CA</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="review-clint">
                                        <p>“Excellent service! The car was spotless and the driver was very polite and helpful.
                                            Made the whole trip stress-free. I’ll definitely be using this again.”</p>
                                        <div className="man">
                                            <img src="https://placehold.co/70x70" alt="img"/>
                                            <div>
                                                <h5>Femi Balogun</h5>
                                                <h6>Vegas, NV</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button">
                                <div className="swiper-button-next"><i className="fa-solid fa-arrow-right"></i></div>
                                <div className="swiper-button-prev"><i className="fa-solid fa-arrow-left"></i></div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}