export default function FaqContainer() {
    return (
        <section id="faq" className="gap">
            <div className="container">
                <div className="heading">
                    <span>Frequently Asked Questions</span>
                    <h2>Finding your ride with us: Guide & <span>FAQs</span></h2>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    <div className="col-lg-6">
                        <div className="accordion">
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">How do I book a car??</div>
                                </a>

                                <div className="content">
                                    <p>Simply fill out the booking form on our website with your details, and we’ll contact you shortly to confirm your trip.</p>
                                </div>
                            </div>
                            <div className="accordion-item active">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">How long does it take to get a confirmation?</div>
                                </a>

                                <div className="content" style={{ display: "block" }}>
                                    <p>We usually respond within a short time via text or email to confirm availability and pricing.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Do I pay online or in person?</div>
                                </a>

                                <div className="content">
                                    <p>Payment details will be discussed during confirmation. We’ll guide you through the available options.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Are your prices fixed?</div>
                                </a>
                                <div className="content">
                                    <p>Yes, once your booking is confirmed, the price agreed is the final price with no hidden fees.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">What areas do you cover?</div>
                                </a>

                                <div className="content">
                                    <p>We provide services within local and surrounding areas in California. Contact us to confirm your specific location.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Can I book a ride for a specific time?</div>
                                </a>

                                <div className="content">
                                    <p>Yes, you can request your preferred date and time in the booking form, and we’ll do our best to accommodate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion">
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Do you offer airport transfers?</div>
                                </a>

                                <div className="content">
                                    <p>Yes, we provide reliable airport pickups and drop-offs. Just include your flight details when booking.</p>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Can I make changes to my booking?</div>
                                </a>

                                <div className="content">
                                    <p>Yes, just contact us on: +1 (424) 437-9812 as soon as possible and we’ll help adjust your booking if available.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Do you offer one-way trips?</div>
                                </a>

                                <div className="content">
                                    <p>Yes, we offer flexible one-way and custom trips based on your needs.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">Are your vehicles clean and maintained?</div>
                                </a>
                                <div className="content">
                                    <p>Absolutely. All vehicles are regularly cleaned and maintained to ensure comfort and safety.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">What if I need to cancel my booking?</div>
                                </a>

                                <div className="content">
                                    <p>Please contact us on: +1 (424) 437-9812 as early as possible. Cancellation policies will be explained during booking confirmation.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <a href="#" className="heading">
                                    <div className="icon"></div>
                                    <div className="title">How can I contact you directly?</div>
                                </a>

                                <div className="content">
                                    <p>You can reach us via phone, text, or email — all contact details are provided on the website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}