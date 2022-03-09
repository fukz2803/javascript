let a = Number(prompt("Nhập chiều dài hcn: "));
let b = Number(prompt("Nhập chiều rộng hcn: "));

function findArea(a, b) {
    return a * b;
}

console.log("Diện tích hình chữ nhật là: " + findArea(a,b));