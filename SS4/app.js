/*
Buổi 3 học gì?
-  Xem  lại buổi 3
*/

//// Reduce
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 10;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10


/////// map là hàm dùng với mảng => kết quả trả về là 1 mảng mới đã thực thi câu lệnh với từng phần tử;

///// Đề bài tăng toàn bộ phần tử mảng arr gấp 5 lần ban đầu và in ra nó:
// let arr = [1, 2, 3, 4, 5]; // [5,10,15,20,25]
// let arrMap = arr.map(item => item *5);// [5,10,15,20,25]
// console.log("arrMap: ", arrMap);



////// Đề bài lọc ra toàn bộ phần tử mảng có giá trị lớn hơn 10 biết
// let arr = [1, 34, 40, 0, 9, 4, 100];// [34,40,100]
// let newArrFilter = arr.filter(item => item > 10);
// console.log("newArrFilter: ", newArrFilter);




///////////// Chữa BTVN
//// Bài 1: 
/*
Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0]. 
Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. 
(sử dụng filter() )
 */

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [1, 6, 8, 9, 0];
let arr3 = arr1.filter(item => arr2.includes(item));/// true/falsev => true, false, false, ..., true 
console.log("arr3: ", arr3); // [1, 6]


// console.log(
//   arr2.includes(10)
// );