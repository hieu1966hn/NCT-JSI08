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
// let str = " High knowledge, high return";
// // xử lý chữ hoa về chữ thường 
// str = str.toLowerCase().trim();
// console.log("str: ", str);

// // Chuyển đổi String về dạng mảng split()
// let NewArrayStr = str.split(" ");
// console.log("NewArrayStr: ", NewArrayStr);



///// List lại kiến thức 
/*
Kiến thức liên quan tới Class
1. Thuộc tính
2. Phương thức
3. Kế thừa

*/


//// Tính kế thừa
// class Person {
//   //// Khởi tạo thuộc tính
//   constructor(_name, _age, _address, _cccd, _jobs) {
//     this.name = _name;
//     this.age = _age;
//     this.address = _address;
//     this.cccd = _cccd
//     this.jobs = _jobs

//   }

//   say() {
//     return `I'am Person and my name is ${this.name}`
//   }
// }

// let QuynhThu = new Person("Quỳnh Thư", 18, "Quảng Ngãi", "0123456789", "Student");
// console.log("QuynhThu: ", QuynhThu);


/// Kế thừa từ class Person;
// class Student extends Person {
//   constructor(_name, _age, _address, _cccd, _jobs, _class, _idStudent) {
//     /// Từ khóa kế thừa: Super();
//     super(_name, _age, _address, _cccd, _jobs);
//     this.class = _class;
//     this.idStudent = _idStudent
//   }


//   //// Kế thừa phương thức 
//   say() {
//     super.say();
//     return super.say() + `and I am learning code From MindX SchooL`
//   }
// }

// let QuynhThu = new Student("Quỳnh Thư", 18, "Quảng Ngãi", "0123456789", "Student", "12T1", "0234");
// console.log("QuynhThu: ", QuynhThu);



// Chữa bài: 
/// Bài 12: 
// class Hinh {
//   constructor(chieuRong, chieuDai) {
//     this.chieuRong = chieuRong;
//     this.chieuDai = chieuDai
//   }
// }

// /// Class hinhtamgiac
// class HinhTamGiac extends Hinh {
//   constructor(chieuRong, chieuDai) {
//     super(chieuRong, chieuDai)
//     // chieu dai: chiều cao
//     // chieu rong: Cạnh đáy
//   }

//   area() {
//     return this.chieuDai * this.chieuRong / 2

//   }
// }

// class HinhChuNhat extends Hinh {
//   constructor(chieuRong, chieuDai) {
//     super(chieuRong, chieuDai)
//     // chieu dai: chiều cao
//     // chieu rong: Cạnh đáy
//   }

//   area() {
//     return this.chieuDai * this.chieuRong

//   }
// }

// let hinhtg1 = new HinhTamGiac(3, 4);
// console.log(hinhtg1.area());
/// Tương tự với HCN



///// Bài 11: 
class People {
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
  }

  /// Thay đổi, lưu thông tin
  set(prop, value) {
    this[prop] = value
    return this[prop]
  }

  // Xuất thông tin
  get(prop) {
    return this[prop]
  }
}


class Student extends People {
  constructor(name, age, address, id, math, physical, chemistry) {
    super(name, age, address);
    this.id = id;
    this.math = math;
    this.physical = physical;
    this.chemistry = chemistry;
  }

  GPA() {
    return (this.math + this.physical + this.chemistry) / 3
  }
}

let DuyLong = new Student("Duy Long", 17, "Bắc Ninh", "123", 10, 10, 9.5);
console.log("DuyLong: ", DuyLong);

