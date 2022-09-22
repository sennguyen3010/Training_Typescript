//type:
//primitive value: gtri co ban
let hoTen: string = 'string';
let luong: number = 1000;
let valid: boolean = true;
let result10: undefined = undefined;
let userLogin: null = null;

//reference value(object)
//type là từ khoá khai báo kiểu dữ liệu
type NhanVien = {
  ma: number;
  hoTen: string;
  luongCB: number;
  moTa?: string; //?: optional properties
};

let nv: NhanVien = { ma: 1, hoTen: 'Nguyen Van A', luongCB: 1000 };

type ResponseTypeResult = string | boolean | undefined | NhanVien;

let resultServer: ResponseTypeResult = null;

//interface: cũng tạo ra 1 định dạng như type
interface Product {
  id: number | string;
  name: string;
  price: number;
  img: string;
}

interface Product {
  desc?: string;
}

let prod: Product = { id: 1, name: 'product1', price: 1000, img: 'https://picsum.photos/2000', desc: 'abc' };

interface Button {
  id: number | string;
  innerHTML: string;
  className: string;
}

interface ButtonGradient extends Button {
  css: string;
}

let btn: ButtonGradient = {
  id: 'btn-1',
  innerHTML: 'Button 1',
  className: 'btn',
  css: 'abc',
};

//interface định dạng dữ liệu cho prototype (class)
interface CRUD {
  create;
  update;
  delete;
  search;
}

class FoodList implements CRUD {
  create: any;
  update: any;
  delete: any;
  search: any;
}

//type của function
let tinhTong = (num1: number, num2: number): number => {
  return num1 + num2;
};

//có void không có return
let showMess = (mess: string): void => {
  console.log('hello', mess);
};

function main(callback: (title: string) => void) {
  //render ra giao dien 1 doan noi dung gi do
  callback('Hello word');
}

const renderH1 = (title: string): void => {
  document.querySelector('body').innerHTML = `<h1>${title}</h1>`;
};

const renderDiv = (title: string): void => {
  document.querySelector('body').innerHTML = `<div class="bg-dark text-white p-5 text-center">${title}</div>`;
};

main(renderDiv);

//kieu du lieu cua mảng
let arrNumber: number[] = [1, 2, 3];
let arrProd: Product[] = [
  { id: 1, name: 'product1', price: 1000, img: 'link123' },
  { id: 2, name: 'product1', price: 1000, img: 'link123' },
  { id: 3, name: 'product1', price: 1000, img: 'link123' },
];

//tuple: thể hiện của dữ liệu dưới dạng mảng
let result: [number, (newNumber: number) => number] = [
  1,
  (newNumber): number => {
    return newNumber;
  },
];

let sv: [number, string] = [1, 'Nguyen Van A'];

//kiểu dữ liệu any, unknown
//any, unknown: nhận tất cả các kiểu gtri. tuy nhiên phải check kiểu dữ liệu mới đc thực hiện operation
type ResponseServer = number | Product | NhanVien | null | undefined;
let result20: any | number = 1;

//any cho Phép thực thi operation (+ - * / gọi hàm)
class ProductType {
  id: string = '';
  name: string = '';
  img: string = '';
  showInfo(): void {
    console.log('id', this.id);
    console.log('name', this.name);
    console.log('img', this.img);
  }
}

let prod1 = new ProductType();
prod1.id = '1';
prod1.name = 'product 1';
prod1.img = 'link123';

let result30: unknown = 1;
if (result30 instanceof ProductType) {
  result30.showInfo();
}
if (typeof result30 == 'number') {
  result30++;
}

/**
 access modifier:
 + private: trong class sử dụng được, instance (đối tượng tạo từ class đó) không truy xuất được
 lớp con không thể sử dụng được
 + protected: trong class đó sử dụng được, instance không sử dụng được, class con có thể sử dung được
 + public (mặc định): tất cả đều truy xuất dc
 */

class NhanVienCyber {
  public maNhanVien: string | number = '';
  public tenNhanVien: string = '';
  private luongCB: number = 1000;
  heSoLuong: number = 1;

  tinhLuong(): number {
    return this.luongCB * this.heSoLuong;
  }
  tinhPhuCap(): number {
    return this.luongCB * this.heSoLuong + 1000;
  }
}

class NhanVienKeToan extends NhanVienCyber {
  nghiepVuKeToan: string;
  keToan() {}
}

let nv1: NhanVienCyber = new NhanVienCyber();
nv1.maNhanVien = 1;
nv1.tenNhanVien = 'A';
// nv1.luongCB = 5000;

console.log(nv1.tinhLuong());

let nv2: NhanVienKeToan = new NhanVienKeToan();
nv2.maNhanVien = 1;
nv2.tenNhanVien = 'A';
// nv1.luongCB = 5000;

console.log(nv2.tinhLuong());
