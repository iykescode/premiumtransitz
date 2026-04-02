import {Vehicle} from "@/pages/types/Vehicle";

type Props = {
    vehicleData: Vehicle[];
};

export default function GapContainer({ vehicleData }: Props) {
    return (
        <section className="gap">
            <div className="container">
                <div className="row g-4">
                    {
                        vehicleData.map((vehicle) => (
                            <div key={vehicle.plate} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={vehicle.dataWowDelay}>
                                <div className="car-book">
                                    <div className="save-upto">
                                        <img src="/assets/img/percentage-icon.png" alt="img"/><h6>Save Upto 15%</h6>
                                    </div>
                                    <img src="/assets/img/car-back-img.png" alt="img" className="car-back"/>
                                    <img src={vehicle.image} alt="img"/>
                                    <h3>{vehicle.brand + " " + vehicle.model}</h3>
                                    <ul>
                                        <li>
                                            <i className="flaticon-speedometer"></i>{vehicle.mileagePerHour} m
                                        </li>
                                        <li>
                                            <i className="flaticon-coin"></i>
                                            ${vehicle.pricePerHour}/hr
                                        </li>
                                    </ul>
                                    <a href="#">Book Now<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}