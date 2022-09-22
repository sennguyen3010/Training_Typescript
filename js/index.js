//type:
//primitive value: gtri co ban
let hoTen = 'string';
let luong = 1000;
let valid = true;
let result10 = undefined;
let userLogin = null;
let nv = { ma: 1, hoTen: 'Nguyen Van A', luongCB: 1000 };
let resultServer = null;
let prod = { id: 1, name: 'product1', price: 1000, img: 'https://picsum.photos/2000', desc: 'abc' };
let btn = {
    id: 'btn-1',
    innerHTML: 'Button 1',
    className: 'btn',
    css: 'abc',
};
class FoodList {
}
//type của function
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
//có void không có return
let showMess = (mess) => {
    console.log('hello', mess);
};
function main(callback) {
    //render ra giao dien 1 doan noi dung gi do
    callback('Hello word');
}
const renderH1 = (title) => {
    document.querySelector('body').innerHTML = `<h1>${title}</h1>`;
};
const renderDiv = (title) => {
    document.querySelector('body').innerHTML = `<div class="bg-dark text-white p-5 text-center">${title}</div>`;
};
main(renderDiv);
//kieu du lieu cua mảng
let arrNumber = [1, 2, 3];
let arrProd = [
    { id: 1, name: 'product1', price: 1000, img: 'link123' },
    { id: 2, name: 'product1', price: 1000, img: 'link123' },
    { id: 3, name: 'product1', price: 1000, img: 'link123' },
];
//tuple: thể hiện của dữ liệu dưới dạng mảng
let result = [
    1,
    (newNumber) => {
        return newNumber;
    },
];
let sv = [1, 'Nguyen Van A'];
let result20 = 1;
//any cho Phép thực thi operation (+ - * / gọi hàm)
class ProductType {
    constructor() {
        this.id = '';
        this.name = '';
        this.img = '';
    }
    showInfo() {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('img', this.img);
    }
}
let prod1 = new ProductType();
prod1.id = '1';
prod1.name = 'product 1';
prod1.img = 'link123';
let result30 = 1;
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
    constructor() {
        this.maNhanVien = '';
        this.tenNhanVien = '';
        this.luongCB = 1000;
        this.heSoLuong = 1;
    }
    tinhLuong() {
        return this.luongCB * this.heSoLuong;
    }
    tinhPhuCap() {
        return this.luongCB * this.heSoLuong + 1000;
    }
}
class NhanVienKeToan extends NhanVienCyber {
    keToan() { }
}
let nv1 = new NhanVienCyber();
nv1.maNhanVien = 1;
nv1.tenNhanVien = 'A';
// nv1.luongCB = 5000;
console.log(nv1.tinhLuong());
let nv2 = new NhanVienKeToan();
nv2.maNhanVien = 1;
nv2.tenNhanVien = 'A';
// nv1.luongCB = 5000;
console.log(nv2.tinhLuong());
