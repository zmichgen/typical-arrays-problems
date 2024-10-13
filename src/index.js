exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((acc, item) => (acc = acc < item ? acc : item));
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((acc, item) => (acc = acc > item ? acc : item));
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    const sum = array.reduce((acc, item) => acc + item);
    return sum / array.length;
};
