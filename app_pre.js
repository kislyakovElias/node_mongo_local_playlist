// const stuff = require('./stuff');
// console.log(stuff.counter(["shaun", "crystal", "ryu"]));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5))
const events = require('events');
const util = require('util');

// const myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// })
//
// myEmitter.emit('someEvent', 'the event was emitted')

// --===-// ----==
// const Person = function(name){
//     this.name = name;
//
// };
// util.inherits(Person,events.EventEmitter);
//
// const james = new Person('james');
// const mary = new Person('mary');
// const ryu = new Person('ryu');
// const people = [james, mary, ryu];
//
// people.forEach(function (person){
//     person.on('speak', function (mssg){
//         console.log(person.name + ' said: ' + mssg);
//
//     })
// })
// james.emit('speak', 'hey dudes');
// mary.emit('speak', 'holaaa');
//------------------------------------------
const fs =  require('fs');
//
// fs.readFile('readme.txt', 'utf8', function (err, data){
//     fs.writeFile('writeMe.txt', data, err=>{});
// });
// fs.unlink('writeMe.txt', err=>{})
// -------------------------------------------
// fs.mkdir('stuff', function (){
//     fs.readFile('readme.txt', 'utf8', function (err, data){
//         fs.writeFile('./stuff/writeMe.txt', data, err=>{})
//     })
// })
fs.unlink('./stuff/writeMe.txt', err=>err)
fs.rmdir('stuff', err=>err)

// fs.writeFileSync('wrightme.txt', 'readMe');
// console.log(readMe);





