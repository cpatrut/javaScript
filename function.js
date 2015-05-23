var calculator = {
    calculate: function (x, y, fn) {
        return fn(x, y);
    }
};
var sum = function (x, y) {
    return x + y;
}, dif = function (x, y) {
    return x - y;
};
var sumRe = calculator.calculate(1, 2, sum),
    difRes = calculator.calculate(1, 2, dif);
alert(sumRe);
alert(difRes);
