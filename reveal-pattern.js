// One of the major problems of JavaScript is the absence of namespacing
// Programs that run in the global scope pollute the global namespace with data that comes from both internal application code and dependencies
// A popular technique to solve this problem is called the "revealing module pattern", and it looks like this:
var exampleModule = (function () {
    var privateFoo = function (a, b) { return a + b; };
    var privateBar = [1, 2, 3];
    var meaninglessNumber = privateFoo(privateBar[0], privateBar[2]);
    var exported = {
        publicFoo: function () { console.log(meaninglessNumber); },
        publicBar: function () { }
    };
    return exported;
})();

console.log(exmapleModule);
