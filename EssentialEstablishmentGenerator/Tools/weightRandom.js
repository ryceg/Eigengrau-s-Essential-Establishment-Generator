/**
 * @param specs Object containing elements as properties and their weight as value
 */
setup.weightRandom = function (specs) {
    let sum = 0;
    let r = Math.random();
    let totalWeight = 0;

    if (specs === null || typeof specs !== 'object') {
        return null;
    }

    for (var prop in specs) {
        totalWeight += specs[prop];
    }

    for (var prop in specs) {
        sum += specs[prop] / totalWeight;
        if (r <= sum) return prop;
    }
}
