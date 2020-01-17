export type TripId = number;

export interface TripData {
    id: TripId;
    startTime: number;
    endTime: number;
}

export interface Trip extends TripData{
    driver: BusId;
}

export type BusId = string;

export interface Bus {
    id: BusId;
    trips: Trip[];
}

// constructor(id: BusId, trips: Trip[]) {
    //     this.id = id;
    //     this.trips = new Map<TripId, Trip>();
    //     trips.forEach(trip => this.addTrip(trip));
    // }

    // addTrip(this: any, trip: Trip): void {
    //     if (!this.canAddTrip(trip)) {
    //         throw Error('Cannot add trip: does not fit into schedule');
    //     }

    //     this.trips.set(trip.id, trip);
    // }