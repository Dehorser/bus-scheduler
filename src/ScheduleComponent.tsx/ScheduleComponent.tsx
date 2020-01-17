import _ from "lodash";
import React, { FunctionComponent } from "react";
import { Bus, Trip } from "../helper/dataClasses";
import { TripComponent } from "../TripComponent/TripComponent";
import style from "./schedule.module.css";

export const NEW_BUS_ID = "New Bus";
const maximumHours = 12;

interface Props {
    buses: Bus[];
    selectedTrip: Trip | null;
    onSelectTrip: (newTrip: Trip) => void;
    onSelectExistingBus: (selectedBus: Bus) => void;
    onSelectNewBus: () => void;
}

export const ScheduleComponent: FunctionComponent<Props> = ({
    buses,
    selectedTrip,
    onSelectTrip,
    onSelectExistingBus,
    onSelectNewBus,
}) => {

    const header = (
        <thead>
            <td />
            <td className={style.header}>
                {_.range(maximumHours).map(hour => (
                    <div className={style.hour}>
                        {`${hour}:00`}
                    </div>
                ))}
            </td>
        </thead>
    );

    // A dummy row to add a new bus. Superficially resembles the main rows
    const newBus = (
        (
            <tr className={style.newBus}>
                <td className={style.busName}>
                    {"New Bus"}
                </td>
                <td
                    className={style.tripDisplay}
                    onClick={onSelectNewBus}
                />
            </tr>
        )
    )

    return (
        <table className={style.schedule}>
            {header}
            <tbody>
                {buses.map(({ id, trips }, index) => {

                    // Style every even row as a "road"
                    const isEven = index % 2 === 0;
                    const rowClassName = isEven ? style.asphalt : "";
                    const dottedLineComponent = isEven ? <div className={style.roadLine} /> : null;

                    return (
                        <tr
                            key={id}
                            className={rowClassName}>
                            <td className={style.busName}>{`Bus #${id}`}</td>
                            <td
                                className={style.tripDisplay}
                                onClick={() => onSelectExistingBus({ id, trips })}>
                                {
                                    trips.map((trip) => {
                                        return (
                                            <TripComponent
                                                key={trip.id}
                                                trip={trip}
                                                selected={trip.id === selectedTrip?.id}
                                                onSelect={onSelectTrip}
                                            />
                                        );
                                    })
                                }
                                {dottedLineComponent}
                            </td>
                        </tr>
                    );
                })}
                {selectedTrip && newBus}
            </tbody>
        </table>
    );
};
