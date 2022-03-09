// alert("Hello JS");
// console.log("Giá trị");

let myName = "Kiên";

const FAFFAF = "fqopwmf";

let objectName = {
    name : "Kien",
    Age : 28,
    job : "avvc",
    favourite : ["code","ăn","ngủ","chơi"],
    pc : {
        screensize : 28,
        color : "black",
        cpu : "intel",
        vga: "nvdia",
    },
    play(){
        console.log("playing");
    }
};

function display(obj,key){
    if (typeof (obj[key]) == "function") {
        obj[key]();
    }
    else {
        console.log(obj[key]);
    }
}

// display(objectName,"play");
// display(objectName,"name");
let a = 1,
b = (a % 2 ) * 2,
c = a++ - b--,
d = "0";


function abcd(a,b,c,d){
 
    return a + b + c + d;
}

console.log(b);

console.log(abcd(a,b,c,d));
