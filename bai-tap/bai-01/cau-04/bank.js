let P = Number(prompt("Nhập số tiền gốc ban đầu: "));
let r = Number(prompt("Nhập lãi suất hàng năm: "));
let n = Number(prompt("Nhập số lần ghép lãi 1 năm: "));
let t = Number(prompt("số năm gửi ngân hàng: "));

function compoundInterest(P, r, n, t) {
    return P * ((1 + r / n) ** (n * t));
}

console.log("Lãi suất của bạn là: " + compoundInterest(P, r, n, t));