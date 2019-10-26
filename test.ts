class Test {
    i: number = 5;

    // constructor(init?: Partial<Test>){
    //     (<any>Object).assign(this, init);
    // }
}

// let t66 = new Test ({
//     i : 66
// });

let r = 5;
let t = new Test();

let t2: Test = {
    i: 6
};

let t3 = new Test();
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
