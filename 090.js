// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return
//    an object of your own making, not the implicit 'this'.

var Robot = function(){
	return this
};

var Vehicle = function(){
	var obj = {};
	return obj;
};


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
