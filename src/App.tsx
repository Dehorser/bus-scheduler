import React, { useCallback, useEffect, useState } from "react";

import { Bus, BusId, Trip, TripData } from "./helper/dataClasses";
import { canAddTrip, generateBusId, reassignDriver, removeTrip } from "./helper/helper";
import { ScheduleComponent } from "./ScheduleComponent.tsx/ScheduleComponent";

import style from "./app.module.css";
import helper from "./helper/helper.module.css";

const NO_TRIP_SELECTED = null;

const App: React.FC = () => {

  const [buses, setBuses] = useState<Bus[]>([]);

  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(NO_TRIP_SELECTED);

  const onSelectTrip = useCallback((newTrip: Trip) => {
    // Unselect a trip if it is clicked twice in a row
    if (selectedTrip?.id === newTrip.id) {
      setSelectedTrip(null);
    } else {
      setSelectedTrip(newTrip);
    }
  }, [selectedTrip]);

  // Code is duplicated between moveTripToExistingBus and moveTripToNewBus
  // However, combining the two functions is messy and would be the wrong
  // abstraction: https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction
  const moveTripToExistingBus = useCallback((destinationBus: Bus) => {
    if (selectedTrip === NO_TRIP_SELECTED || !canAddTrip(selectedTrip, destinationBus.trips)) {
      return;
    }

    const newBuses = buses
      .map((bus) => {
        switch (bus.id) {
          // Delete the trip from the source bus
          case selectedTrip.driver:
            return removeTrip(selectedTrip, bus);
          // Add the trip to the existing bus
          case destinationBus.id:
            const updatedTrip = reassignDriver(selectedTrip, destinationBus.id);
            return {
              ...destinationBus,
              trips: [...destinationBus.trips, updatedTrip],
            };
          default:
            return bus;
        }
      })
      // Remove buses without trips
      .filter((bus) => bus.trips.length > 0);

    setBuses(newBuses);

    // Unselect after moving trip
    setSelectedTrip(NO_TRIP_SELECTED);
  }, [selectedTrip, buses]);

  const moveTripToNewBus = useCallback(() => {
    if (selectedTrip === NO_TRIP_SELECTED) {
      return;
    }

    // Delete the trip from the source bus
    const newBuses = buses
      .map((bus) => {
        switch (bus.id) {
          case selectedTrip.driver:
            return removeTrip(selectedTrip, bus);
          default:
            return bus;
        }
      })
      // Remove buses without trips
      .filter((bus) => bus.trips.length > 0);

    const newBusId: BusId = generateBusId();
    const newBus: Bus = {
        id: newBusId,
        trips: [reassignDriver(selectedTrip, newBusId)],
      };
    newBuses.push(newBus);

    setBuses(newBuses);

    // Unselect after moving trip
    setSelectedTrip(NO_TRIP_SELECTED);
  }, [selectedTrip, buses]);

  // Fetch the JSON to populate the data
  useEffect(() => {
    fetch("bus-scheduling-input.json")
      .then((response) => response.json())
      .then((data) => data.map((tripData: TripData): Bus => {
        const id = generateBusId();
        const trip = {
          ...tripData,
          driver: id,
        };
        return { id, trips: [trip] };
      }))
      .then((initialBuses) => setBuses(initialBuses));
  }, []);

  return (
    <div className={style.app}>
      <div className={style.content}>
        <div className={style.header} >
          <h1>Bus Scheduling App</h1>
          <h4>Solve NP-hard problems by hand</h4>
        </div>
        {buses.length > 0 ? (
          <ScheduleComponent
            buses={buses}
            selectedTrip={selectedTrip}
            onSelectTrip={onSelectTrip}
            onSelectExistingBus={moveTripToExistingBus}
            onSelectNewBus={moveTripToNewBus}
          />) : <div className={helper.smallPadding}>Loading!</div>}
        </div>
    </div>
  );
};

export default App;
