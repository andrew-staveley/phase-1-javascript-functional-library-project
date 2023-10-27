const myEach = function(array, alert) {
    for (let num of Object.values(array)) {
        alert(num)
    };
    return array;
};