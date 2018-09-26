// Home №1
var a;
var b;
var c;
var D;
var x;
var x_1;
var x_2;
a = prompt("a =");
b = prompt("b =");
c = prompt("c =");
D = b*b - 4*a*c;
if(D > 0){
x_1 = (-b + Math.sqrt(D)) / 2*a;
x_2 = (-b - Math.sqrt(D)) / 2*a;
alert("x1 = " + x_1 + ", x2 = " + x_2);
}
else if(D < 0){
alert("x не имеет корнев");
}
else{
x = -b / 2*a;
alert(" x = " + x);
}