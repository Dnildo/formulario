let frm = document.querySelector("form")


function formulario(){
    frm = document.querySelector("form").animate(
[
    {transform: "rotate(6333deg) matrix(1,2,3,2,-1,-2) translate(50%)"}
],
{
    duration:3000,
}
    );
}
frm.addEventListener("load", formulario())