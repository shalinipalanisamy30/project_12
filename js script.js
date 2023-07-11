
function Add(){
    var a = parseInt(document.getElementById("n1").value);
    var b =  parseInt(document.getElementById("n2").value);
    var c = a+b;
    document.getElementById("add").innerHTML=c;
}
function Sub(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a - b;
    document.getElementById("sub").innerHTML=c;
}
function Multiplication(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a * b;
    document.getElementById("multiplication").innerHTML=c;
}
function Divide(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = a / b;
    document.getElementById("divide").innerHTML=c;
}


