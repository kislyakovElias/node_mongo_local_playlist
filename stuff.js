const counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

const adder = function (a,b) {
    return `Sum between ${a} and ${b} = ${a+b}`
}

const pi = 3.142

module.exports = {
    pi:pi,
    counter:counter,
    adder: adder
}