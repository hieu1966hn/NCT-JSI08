// let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
// /// Filter lọc mảng
// let mNumber = m.filter(item => typeof (item) === "number")
// console.log("mNumber: ", mNumber);

// let mSquared = mNumber.map(item => item * item)
// console.log("mSquared: ", mSquared);


/*
Câu 10: Thực hiện duyệt string sau đây: “ High knowledge, high return”. 
Chuyển đổi string về dạng array, xóa bỏ các phần tử có giá trị là “ “; 
và các phần tử có giá trị là chữ hoa chuyển thành chữ thường.
*/
let str = " High knowledge, high return";
// xử lý chữ hoa về chữ thường 
str = str.toLowerCase().trim();
console.log("str: ", str);

// Chuyển đổi String về dạng mảng split()
let NewArrayStr = str.split(" ");
console.log("NewArrayStr: ", NewArrayStr);


