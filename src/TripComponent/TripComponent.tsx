import React, { FunctionComponent, useCallback } from "react";
import { Trip, TripId } from "../helper/dataClasses";

import style from "./trip.module.css";

interface Props {
    trip: Trip;
    selected: boolean;
    onSelect: (newSelection: Trip) => void;
}

export const TripComponent: FunctionComponent<Props> = ({trip, selected, onSelect}) => {

    const onClick = useCallback((event) => {
        // Don't trigger the onClick event for the parent
        event.stopPropagation();
        onSelect(trip);
    }, [trip, onSelect]);

    return (
        <div
            className={style.trip}
            key={trip.id}
            style={{
                borderColor: selected ? "blue" : "black",
                // One pixel per minute
                left: trip.startTime,
                width: trip.endTime - trip.startTime,
            }}
            onClick={onClick}
        >
            {trip.id}
        </div>
    );
};