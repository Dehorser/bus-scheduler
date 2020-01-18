import _ from "lodash";
import { Bus, BusId, Trip } from "./dataClasses";

const MINUTES_PER_HOUR = 60;

export function canAddTrip(trip: Trip, trips: Trip[]): boolean {
    return trips.every((curTrip: Trip) => {
      return trip.endTime <= curTrip.startTime || trip.startTime >= curTrip.endTime;
    });
  }

export function formatTime(minutes: number) {
  const hourPart = Math.floor(minutes / MINUTES_PER_HOUR);
  const minutePart = minutes % MINUTES_PER_HOUR;
  const paddedHour = hourPart.toString().padStart(2, "0");
  const paddedMinute = minutePart.toString().padStart(2, "0");
  return `${paddedHour}:${paddedMinute}`;
}

export function formatHour(hours: number) {
  return formatTime(hours * MINUTES_PER_HOUR);
}

export function generateBusId(): BusId {
    return _.uniqueId();
}

export function reassignDriver(trip: Trip, newDriver: BusId): Trip {
  return {
    ...trip,
    driver: newDriver,
  };
}

export function removeTrip(removedTrip: Trip, bus: Bus): Bus {
  return {
    ...bus,
    trips: bus.trips.filter((trip) => trip.id !== removedTrip.id),
  };
}
