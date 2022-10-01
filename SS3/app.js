/*
Buổi trước mình học về gì: Ôn tập syntax loop, câu đk, kiến thức căn bản của JS
thao tác với arr: splice, C,R,U,D



Buổi 3:
- Reduce
- split
- slice
- map
- filter
- find
- indexOf
*/

// VD về dom
// const h1 = document.getElementById("demo");
// console.log("h1: ", h1);


// const chao = document.querySelector(".chao");
// console.log("chao: ", chao);


// const query = document.querySelector("#demo")
// query.innerHTML= "chao xin"
// console.log("query: ", query);

// VD về reduce:
// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }



////// Vi dụ vể hàm split: Tách 
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let str = "1,2,3,4,5,6,7,8,9,10";
// let result = str.split(",")
// console.log("result: ", result);// => num nhưng ở dạng chuỗi



/////// Slice: cắt mảng
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);// => Cắt mảng: (hs1, hs2): hs1 => vị trí bắt đầu cắt mảng. hs2 => vị trí kết thúc cắt mảng
// console.log("citrus: ", citrus);


/// Map: là cú pháp dùng để thao tác với từng phần tử trong mảng theo 1 điều kiện nhất định => Kq là 1 mảng mới đã thực hiện câu lệnh đó
//// Đề bài: Gấp đôi từng phần tử mảng.
let arr = [1, 4, 8, 10];
/// C1:
// for (let i = 0; i < arr.length; i++) {// duyệt từng phần tử mảng
//   arr[i] = arr[i] * 2
// }
// console.log("arr: ", arr);

//// C2: sử dụng map
let arr2 = arr.map(item => item * 2)// [2, 8, 16, 20]
console.log("arr2: ", arr2);