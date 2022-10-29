let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
/// Filter lọc mảng
let mNumber = m.filter(item => typeof (item) === "number")
console.log("mNumber: ", mNumber);

let mSquared = mNumber.map(item => item * item)
console.log("mSquared: ", mSquared);