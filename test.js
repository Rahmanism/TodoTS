var Test = /** @class */ (function () {
    function Test() {
        this.i = 5;
        // constructor(init?: Partial<Test>){
        //     (<any>Object).assign(this, init);
        // }
    }
    return Test;
}());
// let t66 = new Test ({
//     i : 66
// });
var r = 5;
var t = new Test();
var t2 = {
    i: 6
};
var t3 = new Test();
t3.i = 7;
console.log(t2);
console.log(typeof r);
console.log(typeof t);
if (t instanceof Test) {
    console.log('It is TEST.');
}
else {
    console.log('It is not test.');
}
if (typeof t.i === "number") {
    console.log('it is number');
}
if ('i' in t && typeof t.i === 'number') {
    console.log("the member is number");
}
else {
    console.log("No member");
}
