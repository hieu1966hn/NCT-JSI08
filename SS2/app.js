///// Ôn tập kiến thức tại file này..

/*
Ngôn ngữ lập trình là gì?
- HTML, CSS => không được gọi là ngôn ngữ lập trình
- Javascript là ngôn ngữ lập trình thôi
- Nn lập trình là ngôn ngữ có thể xử lý logic, tính năng



Trong JS em đã học những gì về nó?
- Hàm
- Array: 0
- Object: 0
- Câu điều kiện
- Loop: 0
- LocalStorage
- Async await: 0
- Apis
- Promise
- JSON
- DOM
- Biến
*/


/*
Kiểu dữ liệu: 6 kiểu dữ liệu cơ bản Trong JS
- Number: Số
- String:  Chuỗi
- Null: Rỗng
- Object: Đối tượng
- Boolean: true/false
- Undefinded: Không xác định


Biến là gì?
- Khái niệm: Biến là vùng nhớ dùng để lưu trữ dữ liệu

Cú pháp khai báo biến: let/ var/ const
- let/var: dùng để khai báo tên biến bình thường
- const: Dùng để khai báo hằng số (hằng số thì không thay đổi được)
*/

// let a = 1;
// let b = 2;
// console.log("a bằng: ", a); // dùng để in giá trị|| dữ liệu lên màn hình console
// console.log("b bằng: ", b);



/*
Toán tử trong Javascript:
0. Toán tử gán: =
1. Toán tử số học: +, -, *, /, %
2. Toán tử so sánh: >,<, >=,<=, ==, ===
3. Toán tử logic: &&, ||
4. Toán tử 3 ngôi: (điều kiện)?"câu lệnh 1":"Câu lệnh 2"
*/

// VD với TTSH:
// console.log(
//   1 / 3
// ); // 0.33333

// console.log(
//   1 % 3
// ); // 1 => %: Là phép chia lấy số dư



//// VD với TTSS
// console.log(
//   1 === 2
// ); // False

// console.log(
//   1 == "1"
// ); // True|| ==: So sánh tương đối (chỉ so sánh về giá trị, không so sánh về Kiểu dữ liệu)
// console.log(
//   2 === "2"
// ); // False|| ===: So sánh tuyệt đối ( so sánh cả về giá trị và về Kiểu dữ liệu)



//// Câu điều kiện: dùng để kiểm tra điều kiện phù hợp 
/*
if(điều kiện kiểm tra){
  ... lệnh trong if
}
else{
.... lệnh trong else
}

VD với bài toán như sau:  Kiểm tra năm có phải là năm nhuận hay không biết rằng
1. Năm nhuận là năm chia hết cho 4 nhưng không chia hết cho 100
2. Năm nhuận là năm chi hết cho 400
*/
// let nam1 = 2000;
// let nam2 = 2012;
// let nam3 = 2022;

// /// Bạn nào cũng phải làm nhé để anh kiểm tra kiến thức.
// if (nam2 % 4 === 0 && nam2 % 100 !== 0) {
//   console.log(`${nam2} là năm nhuận`);
// }
// else {
//   console.log(`${nam2} không là năm nhuận`);
// }



///// Vòng lặp
/*
3 vòng lặp cơ bản: while, do while, for
- Cú pháp while:
while(điều kiện){
  ... Thực hiện lệnh
}
*/

/// VD với bài toán: in ra các số từ 1 -> 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);// 1,2,3,... 10
//   i = i + 1; //2,3,4, ... 11
// }


///// VD với vòng lặp do-while
// let i = 1;
// do {
//   console.log(i);// 1
//   i = i + 1;//2 || i++;
// }
// while (i <= 10);


/*
While: KTĐK => Lặp
Do While: Lặp lần đầu  => KTĐK
*/

/*
Vòng lặp for: Cú pháp

for(box1; box2; box3){
  câu lệnh....
}


- box1: Câu lệnh chạy lần đầu tiên và duy nhất vòng for
- box2: Kiểm tra điều kiện (điều kiện dừng vòng lặp)
- box3: Câu lệnh chạy cuối cùng của mỗi lần lặp

*/

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);// 1,2,3,... 10

// }




/*
Ôn tập về mảng: danh sách => dùng để lưu trữ dữ liệu và truy vấn dữ liệu
- Cú pháp khai báo mảng: 


*/

//// Khai báo mảng rỗng
let arr = [];

/// KHai báo mảng có phần tử:
let arr1 = ["hello", "hi", 123, 456];


/// Thêm phần tử vào mảng arr: push("nội dung thêm")
arr.push("chao", "Xin chào", 123456789);

/// Duyệt mảng: sử dụng vòng lặp
for (let i = 0; i < arr.length; i = i + 1) {
  // console.log(arr[i]); /// In ra từng phần tử của mảng
}

/// Update phần tử của mảng: 123456789 => 123
arr[2] = 123;


/// Delete phần tử mảng: splice(box1, box2, box3)
/*
Box1: vị trí phần tử mảng 
box2: số phần tử muốn xóa từ vị trí đó
box3: phần tử muốn chèn vào tại vị trí đó
*/
arr.splice(2, 1)
