import classNames from "classnames";
import _ from "lodash";
import React, { FunctionComponent } from "react";
import { Bus, Trip } from "../helper/dataClasses";
import { canAddTrip, formatHour, formatTime } from "../helper/helper";
import { TripComponent } from "../TripComponent/TripComponent";
import style from "./schedule.module.css";
import helper from "../helper/helper.module.css";

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
            <td colSpan={2}/>
            <td className={style.xAxis}>
                {_.range(maximumHours).map(hour => (
                    <div className={style.hour}>
                        {formatHour(hour)}
                    </div>
                ))}
            </td>
        </thead>
    );

    // A dummy row to add a new bus. Superficially resembles the main rows
    const newBus = (
        (
            <tr className={style.canAdd}>
                <td colSpan={2}
                    className={helper.smallPadding}>
                    {"New Bus"}
                </td>
                <td
                    className={style.tripDisplay}
                    onClick={onSelectNewBus}
                />
            </tr>
        )
    );

    return (
        <table className={style.schedule}>
            {header}
            <tbody>
                {buses.map(({id, trips}, index) => {

                    // Style whether you can move a trip to a row
                    let addTripClassname = "";
                    // Don't mess with the styling of the source bus
                    if (selectedTrip && selectedTrip.driver !== id) {
                        addTripClassname = canAddTrip(selectedTrip, trips) ? style.canAdd : style.cannotAdd;
                    }

                    // Style every even row as a "road"
                    const isEven = index % 2 === 0;
                    const dottedLineComponent = isEven ? <div className={style.roadLine} /> : null;

                    const rowClassName = classNames(
                        addTripClassname, {
                        [style.asphalt]: isEven,
                    });

                    const startTime = _.min(trips.map(trip => trip.startTime)) || 0;
                    const endTime = _.max(trips.map(trip => trip.endTime)) || 0;
                    const formattedStartTime = startTime ? formatTime(startTime) : "undefined";
                    const formattedEndTime = endTime ? formatTime(endTime) : "undefined";

                    return (
                        <tr
                            key={id}
                            className={rowClassName}>
                            <td className={helper.smallPadding}>{`Bus #${id}`}</td>
                            <td className={helper.smallPadding}>{`${formattedStartTime} - ${formattedEndTime}`}</td>
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
