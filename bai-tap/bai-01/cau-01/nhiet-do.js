let c = Number(prompt("Nhập nhiệt độ C cần đổi: "));

function c2f(c){
    return c * 1.8 + 32
};

console.log("Nhiệt độ F là: " + c2f(c));