var add1 = (function() {
    var a = 10;
    return funciton (x, y){
        return x + y + a;
    };
}());

console.log(add(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined
