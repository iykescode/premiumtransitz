"use client";

import { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
};

export default function LocationSearchInput({ value, onChange, onSelect  }: Props) {
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place || !place.formatted_address) return;
        onSelect(place.formatted_address);
    };

    return (
        <Autocomplete
            onLoad={(ref) => (autocompleteRef.current = ref)}
            onPlaceChanged={handlePlaceChanged}
            options={{
                types: ["geocode"], // or "(cities)"
                componentRestrictions: { country: "us" },
            }}
        >
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                name="city"
                placeholder="Airport, postcode, city..."
            />
        </Autocomplete>
    );
}
