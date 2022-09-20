const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice((array.length - 2))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return fare => int * fare;
}

function fareDoubler(fare) {
    const multipliedFare = createFareMultiplier(2);
    return multipliedFare(fare);
}

function fareTripler(fare) {
    const multipliedFare = createFareMultiplier(3);
    return multipliedFare(fare);
}

function selectDifferentDrivers(array, cb) {
    const candidates = cb(array);
    return candidates;
}