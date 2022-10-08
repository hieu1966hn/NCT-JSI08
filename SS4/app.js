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

// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [1, 6, 8, 9, 0];
// let arr3 = arr1.filter(item => arr2.includes(item));/// true/falsev => true, false, false, ..., true 
// console.log("arr3: ", arr3); // [1, 6]


// console.log(
//   arr2.includes(10)
// );




////// Chữa bài 2:
/*
Sử dụng map() với arr = [1,54,6,7]
để tạo ra một newArr có newArr[i] = arr[i] + 5.
*/
// let arr = [1, 54, 6, 7];
// let newArr = arr.map(item => item + 5)
// console.log("newArr: ", newArr);


///// Chữa bài 3: 
/*
Cho array sau:
m = [1,2,4,5,6,7];
n = [3,5,675,8,96].
Hãy viết một hàm, duyệt cả các mảng m và n;
loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.

*/
// let m = [1, 2, 4, 5, 6, 7];
// let n = [3, 5, 675, 8, 96];

// function boGiaTri(arr) {
//   return arr.filter(item => ![1, 8, 10, 96, 7].includes(item))

// }

// console.log(
//   boGiaTri(n)
// );



////// Bài 4:
/*
Cho array 1 như sau: players = [
{ id: 11, name: 'Messi', age: 33 },
{ id: 12, name: 'Ronaldo', age: 34 },
{ id: 13, name: 'Young', age: 35 },
{ id: 14, name: 'Mane', age: 21 },
{ id: 15, name: 'Salah', age: 24 },
]

output:
playersModified =
{
    11: {id: 11, name: "Messi", age: 33},
    12: {id: 12, name: "Ronaldo", age: 34},
    13: {id: 13, name: "Young", age: 35},
    14: {id: 14, name: "Mane", age: 21},
    15: {id: 15, name: "Salah", age: 24}
}

Note: Dùng reduce
*/


//////// Lập trình hướng đối tượng: OOP - Object Oriented Programming)
///////  Khởi tạo classes: => đơn giản giống như ta đang định nghĩa 1 KDL mới trong dự án
// class Person {

//   walk() {
//     alert("Tôi đang đi bộ trên đường Trường Sơn");
//   }

//   sleep() {
//     alert("Quỳnh Như đang ngủ đấy, đừng dại gọi nhé")
//   }
// }

// let QuynhNhu = new Person();
// QuynhNhu.walk();
// QuynhNhu.sleep();



////// Khởi tạo thuộc tính trong class
class Person {
  ///// Khai báo thuộc tính ta sử dụng cú pháp contructor
  constructor(name, age, address, school) {
    /// phải gán giá trị được nhập vào 
    /// Thuộc tính của Person là: _name, _age, .._school
    this._name = name;
    this._age = age;
    this._address = address;
    this._school = school
  }


  /// Phương thức của Person
  goToSchool() {
    alert("Duy Long đang đi học đấy")
  }

  eat() {
    alert("Duy Long đang ăn sáng")
  }

}

// let/var/const
let DuyLong = new Person("Nguyễn Trần Duy Long", 16, "Từ Sơn - Bắc Ninh", "Ngô Gia Tự");
console.log("DuyLong: ", DuyLong);



