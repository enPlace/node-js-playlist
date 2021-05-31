const count= require('./counter.js')
const counter = count.counter;
const printer =count.printer;
console.log(counter([1,2,3,4,5,10]));


printer();