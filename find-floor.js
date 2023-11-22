function findFloor() {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= x) {
            floor = arr[mid];
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return floor;
}

module.exports = findFloor

