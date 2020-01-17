import _ from "lodash";
import { Bus, BusId, Trip } from "./dataClasses";

export function canAddTrip(trip: Trip, bus: Bus): boolean {
    return bus.trips.every((curTrip: Trip) => {
      return trip.endTime <= curTrip.startTime || trip.startTime >= curTrip.endTime;
    });
  }

export function generateBusId(): BusId {
    return _.uniqueId();
}

export function reassignDriver(trip: Trip, newDriver: BusId): Trip {
  return {
    ...trip,
    driver: newDriver,
  }
}

export function removeTrip(removedTrip: Trip, bus: Bus): Bus {
  return {
    ...bus,
    trips: bus.trips.filter((trip) => trip.id !== removedTrip.id),
  }
}
