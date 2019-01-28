const restaurants = {
    name: 'Jalsa Gold',
    capacity: 100,
    currentCount: 50,
    drinks: true,
    checkAvailability: (partySize) => {
        let seatsLeft = restaurants.capacity - restaurants.currentCount;
        return partySize<=seatsLeft;
        // console.log('partySize:', partySize);
    }
}

let status = restaurants.checkAvailability(200);

console.log(status);

