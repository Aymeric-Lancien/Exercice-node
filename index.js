const myInformation = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hello i'm " + myInformation.name + " from " + myInformation.campus + " campus !",
	e : "oO",
	T : "U ",
}));