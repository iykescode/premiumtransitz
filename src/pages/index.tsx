import HomeContainer from "@/components/HomeContainer";
import GapContainer from "@/components/GapContainer";
import BookingStepsContainer from "@/components/BookingStepsContainer";
import DreamBestCarContainer from "@/components/DreamBestCarContainer";
import CustomerServiceContainer from "@/components/CustomerServiceContainer";
import PremiumCarHireContainer from "@/components/PremiumCarHireContainer";
import TestimonialsContainer from "@/components/Testimonials Container";
import FaqContainer from "@/components/FaqContainer";
import {Vehicle} from "@/types/Vehicle";

const vehicleData: Vehicle[] = [
    {
        plate: "9KBF806",
        brand: "Toyota",
        model: "Camry XLE",
        year: 2012,
        color: "Gold",
        type: "Sedan",
        image: "/assets/img/camry-2012.png",
        dataWowDelay: ".3s",
        pricePerMile: 1.25,
        pricePerHour: 60,
        mileagePerHour: 50,
        active: true,
        doors: 4,
        seats: 5,
        transmission: "Automatic",
        airCondition: "Yes",
        luggage: "2 Suitcases / 2 Bags"
    },
    {
        plate: "89786C4",
        brand: "Chevrolet",
        model: "Suburban",
        year: 2023,
        color: "Black",
        type: "SUV",
        image: "/assets/img/chevy-2023.png",
        dataWowDelay: ".6s",
        pricePerMile: 1.75,
        pricePerHour: 75,
        mileagePerHour: 50,
        active: false,
        doors: 4,
        seats: 7,
        transmission: "Automatic",
        airCondition: "Yes",
        luggage: "3 Suitcases / 3 Bags"
    },
];

export default function Home() {
  return (
      <>
          <HomeContainer vehicleData={vehicleData} />
          <GapContainer vehicleData={vehicleData} />
          <BookingStepsContainer />
          <DreamBestCarContainer />
          <CustomerServiceContainer />
          <PremiumCarHireContainer vehicleData={vehicleData} />
          <TestimonialsContainer />
          <FaqContainer />
      </>
  );
}
