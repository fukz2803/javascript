let n = Number(prompt("Nhập tiền usd cần đổi: "));

function usd2vnd(n) {
    return n * 23500;
}

console.log("Số tiền sau khi đổi: " + usd2vnd(n) + " VNĐ");