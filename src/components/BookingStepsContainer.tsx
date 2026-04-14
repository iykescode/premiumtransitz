export default function BookingStepsContainer() {
    return (
        <section>
            <div className="container">
                <div className="heading">
                    <span>how do i rent a car?</span>
                    <h2>Booking car hire in three simple <span>steps</span></h2>
                </div>
                <div className="row g-0">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="stap">
                            <img src="/assets/img/stap2-img.png" alt="img"/>
                            <h4>Step 1:</h4>
                            <h3>Request your vehicle?</h3>
                            <p>Choose your preferred car, date, and location using our quick booking form.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="stap active">
                            <img src="/assets/img/stap3-img.png" alt="img"/>
                            <h4>Step 2:</h4>
                            <h3>Get confirmation?</h3>
                            <p>We’ll reach out shortly to confirm details, availability, and pricing.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="stap">
                            <img src="/assets/img/stap1-img.png" alt="img"/>
                            <h4>Step 3:</h4>
                            <h3>Enjoy your ride?</h3>
                            <p>Once confirmed, your booking is secured — ready for a smooth and reliable experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}