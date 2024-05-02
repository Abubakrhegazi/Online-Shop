var class1=document.getElementsByClassName("product");
var class2=document.getElementsByClassName("men");
var class3=document.getElementsByClassName("watches");


for (var i = 0; i < class1.length; i++) {
    class1[i].addEventListener("click", m);
    
}

for (var i = 0; i < class2.length; i++) {
    class2[i].addEventListener("click", mens);
}

for (var i = 0; i < class3.length; i++) {
    class3[i].addEventListener("click", women);
}
