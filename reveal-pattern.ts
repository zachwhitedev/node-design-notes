// One of the major problems of JavaScript is the absence of namespacing
// Programs that run in the global scope pollute the global namespace with data that comes from both internal application code and dependencies
// A popular technique to solve this problem is called the "revealing module pattern", and it looks like this:
const exampleModule = (() => {
    const privateFoo = (a: number, b: number):number => { return a + b }
    const privateBar: number[] = [1, 2, 3];

    const meaninglessNumber = privateFoo(privateBar[0], privateBar[2]);

    const exported = {
        publicFoo: () => { console.log(meaninglessNumber) },
        publicBar: () => { /* do stuff */ }
    }


    return exported;
})();

const numby = exampleModule.publicFoo();
console.log(numby);