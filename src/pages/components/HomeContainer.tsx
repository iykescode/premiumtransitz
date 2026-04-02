"use client";

import LocationSearchInput from "@/pages/components/LocationSearchInput";
import {Vehicle} from "@/pages/types/Vehicle";
import {useEffect, useState} from "react";
import {formatDateTime, formatDateForInput} from "@/pages/types/utils";

type Props = {
    vehicleData: Vehicle[];
};

type Message = {
    message: string;
    type: string;
}

export default function HomeContainer({ vehicleData }: Props) {
    const [start, setStart] = useState<string>("");
    const [destination, setDestination] = useState<string>("");
    const [dateFrom, setDateFrom] = useState<Date>(new Date());
    const [dateTo, setDateTo] = useState<Date>(new Date());
    const [vehicleBrand, setVehicleBrand] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [trip, setTrip] = useState<string>("");
    const [message, setMessage] = useState<Message>({
        message: "",
        type: "",
    });
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const info = {
        name,
        email,
        phone,
        trip,
        start,
        destination,
        dateFrom: formatDateTime(dateFrom),
        dateTo: formatDateTime(dateTo),
        vehicleBrand,
    };

    useEffect(() => {
        if(!message) return;

        const timer = setTimeout(() => {
            setMessage({
                message: "",
                type: ""
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, [message]);

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        if (start === ""
            || destination === ""
            || dateFrom === null
            || dateTo === null
            || vehicleBrand === ""
            || name === ""
            || email === ""
            || phone === ""
            || trip === "") {
            setMessage({
                message: "Please make sure all fields are filled out properly.",
                type: "error"
            });
            return;
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        });

        const data = await res.json();

        if (data.success === true) {
            setMessage({
                message: "Thanks for booking with us! We will contact you shortly.",
                type: "success"
            })
            setStart("");
            setDestination("");
            setDateFrom(new Date());
            setDateTo(new Date());
            setVehicleBrand("");
            setName("");
            setEmail("");
            setPhone("");
            setTrip("");
            setShowPersonalInfo(false);
            setShowForm(false);
        } else {
            setMessage({
                message: "An error occurred! Please try again later.",
                type: "error"
            })
        }
    }

    return (
        <section id="home" className="hero-section" style={{ backgroundImage: "url(/assets/img/2chevy.jpg)" }}>
            <div className="container">
                <div className="hero-section-text">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s" data-cursor-text='text'>
                            <div className="hero-text">
                                <h1>Looking to hire a <span>vehicle?</span></h1>
                                <h5>You’ve come to the right place.</h5>
                                <ul className="theme-list">
                                    <li><i className="fa-solid fa-check text-white"></i>Free cancellations on most bookings</li>
                                    <li><i className="fa-solid fa-check text-white"></i>Majorly in california</li>
                                    <li><i className="fa-solid fa-check text-white"></i>Customer support in 30+ languages</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="tab-content tabtwo" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home2" role="tabpanel"
                                     aria-labelledby="v-pills-home2-tab">
                                    {
                                        showForm
                                            ? (
                                                <form onSubmit={handleSubmit}>
                                            {
                                                message.type === "error"
                                                    ? (<span style={{color: "red"}}>{message.message}</span>)
                                                    : (<span style={{color: "green"}}>{message.message}</span>)
                                            }
                                            {
                                                !showPersonalInfo && (
                                                    <>
                                                        <div className="pick-up">
                                                            <span>Start</span>
                                                            <LocationSearchInput value={start} onChange={setStart} onSelect={setStart}/>
                                                            <i className="flaticon-aim"></i>
                                                            <i className="flaticon-search"></i>
                                                        </div>
                                                        <div className="pick-up">
                                                            <span>Destination</span>
                                                            <LocationSearchInput value={destination} onChange={setDestination}
                                                                                 onSelect={setDestination}/>
                                                            <i className="flaticon-aim"></i>
                                                            <i className="flaticon-search"></i>
                                                        </div>
                                                        <div className="datatime">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <span>Date From</span>
                                                                    <div className="date-from">
                                                                        <input
                                                                            type="datetime-local"
                                                                            name="date_from"
                                                                            value={formatDateForInput(dateFrom)}
                                                                            onChange={(e) => setDateFrom(new Date(e.target.value))}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <span>Date To</span>
                                                                    <div className="date-from">
                                                                        <input
                                                                            type="datetime-local"
                                                                            name="date_to"
                                                                            value={formatDateForInput(dateTo)}
                                                                            onChange={(e) => setDateTo(new Date(e.target.value))}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Vehicle</span>
                                                        <ul className="rental-type">
                                                            {
                                                                vehicleData.map((vehicle: Vehicle) => (
                                                                    <li key={vehicle.plate}>
                                                                        <input
                                                                            type="radio"
                                                                            name="rental_type"
                                                                            value={vehicle.brand}
                                                                            checked={vehicleBrand === vehicle.brand}
                                                                            onChange={(e) => setVehicleBrand(e.target.value)}
                                                                        />
                                                                        <label htmlFor={vehicle.plate}>{vehicle.brand}</label>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <button className="btn" onClick={() => setShowForm(false)}><span>Close</span></button>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <button className="btn" onClick={() => setShowPersonalInfo(true)}><span>Next</span></button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            {
                                                showPersonalInfo && (
                                                    <>
                                                        <div className="pick-up">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <span>Name</span>
                                                                    <div className="other-text">
                                                                        <input
                                                                            type="name"
                                                                            name="name"
                                                                            value={name}
                                                                            onChange={(e) => setName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <span>Phone</span>
                                                                    <div className="other-text">
                                                                        <input
                                                                            type="tel"
                                                                            name="phone"
                                                                            value={phone}
                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pick-up">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <span>Email</span>
                                                                    <div className="other-text">
                                                                        <input
                                                                            type="email"
                                                                            name="email"
                                                                            value={email}
                                                                            onChange={(e) => setEmail(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>Trip</span>
                                                        <ul className="rental-type">
                                                            <li>
                                                                <input
                                                                    type="radio"
                                                                    name="rental_type"
                                                                    value="distance"
                                                                    checked={trip === "distance"}
                                                                    onChange={(e) => setTrip(e.target.value)}
                                                                />
                                                                <label htmlFor="distance">Distance</label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    type="radio"
                                                                    name="rental_type"
                                                                    value="hour"
                                                                    checked={trip === "hour"}
                                                                    onChange={(e) => setTrip(e.target.value)}
                                                                />
                                                                <label htmlFor="hour">Hour</label>
                                                            </li>
                                                        </ul>
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <button className="btn" onClick={() => setShowPersonalInfo(false)}><span>Back</span></button>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <button className="btn"><span>Submit</span></button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </form>
                                            )
                                                : (
                                                    <button className="btn" onClick={() => setShowForm(true)}>
                                                        Book a Ride <i className="fa-solid fa-car"></i>
                                                    </button>
                                                )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-slider swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="img-div">
                            <img src="/assets/img/2chevy.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-div">
                            <img src="/assets/img/2chevy.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="img-div">
                            <img src="/assets/img/2chevy.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}