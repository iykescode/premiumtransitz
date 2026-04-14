import {Vehicle} from "@/types/Vehicle";

type Props = {
    vehicleData: Vehicle[];
};

export default function PremiumCarHireContainer({ vehicleData }: Props) {
    return (
        <section id="vehiclemodels" className="gap" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="container">
                <div className="heading">
                    <span>Premium car hire at affordable rates. Worldwide. </span>
                    <h2>Car hire and van hire: wide range of <span>vehicles</span></h2>
                </div>
                <div className="d-flex align-items-start justify-content-center">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        {
                            vehicleData.map((vehicle) => (
                                <button key={vehicle.plate} className={`nav-link ${vehicle.active ? "active" : ""}`} id={`v-pills-${vehicle.plate}-tab`} data-bs-toggle="pill"
                                        data-bs-target={`#v-pills-${vehicle.plate}`} type="button" role="tab" aria-controls={`v-pills-${vehicle.plate}`}
                                        aria-selected={vehicle.active}>{vehicle.brand}<img src={vehicle.image} alt="img"/>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    {
                        vehicleData.map((vehicle) => (
                            <div key={vehicle.plate} className={`tab-pane fade show ${vehicle.active ? "active" : ""}`} id={`v-pills-${vehicle.plate}`} role="tabpanel"
                                 aria-labelledby={`v-pills-${vehicle.plate}-tab`}>
                        <div className="car-hire">
                            <div className="car-data">
                                <h4>{vehicle.brand}</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy.</p>
                                <ul className="theme-list">
                                    <li><i className="fa-solid fa-check"></i>Save time with QuickPass</li>
                                    <li><i className="fa-solid fa-check"></i>Flexible, long-term car hire</li>
                                    <li><i className="fa-solid fa-check"></i>Phone Reservation</li>
                                </ul>
                                <h5>${vehicle.pricePerHour} <span>/Rent Per Hour</span></h5>
                                <a href="#" className="btn"><span>Reserve Now</span></a>
                            </div>
                            <div className="car-info">
                                <img src={vehicle.image} alt="img"/>
                                <ul>
                                    <li>Model <span> {vehicle.model}</span></li>
                                    <li>Doors <span>{vehicle.doors}</span></li>
                                    <li>Seats <span>{vehicle.seats}</span></li>
                                    <li>Luggage <span>{vehicle.luggage}</span></li>
                                    <li>Transmission <span>{vehicle.transmission}</span></li>
                                    <li>Air conditioning <span>{vehicle.airCondition}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>

                <div className="row g-4 p-100">
                    <div className="col-lg-4">
                        <div className="car-bok">
                            <img src="/assets/img/icon-car-bok.png" alt="img"/>
                            <div>
                                <h4>Flexible Booking Options</h4>
                                <p>Enjoy complete flexibility with tailored pickup times, locations, and journey plans designed around you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="car-bok">
                            <img src="/assets/img/icon-car-bok-2.png" alt="img"/>
                            <div>
                                <h4>Transparent Pricing</h4>
                                <p>No surprises — just clear, upfront pricing you can trust from start to finish.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="car-bok">
                            <img src="/assets/img/icon-car-bok-3.png" alt="img"/>
                            <div>
                                <h4>Customer Satisfaction</h4>
                                <p>We focus on delivering a reliable, comfortable experience backed by responsive and professional support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}