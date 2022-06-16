function disconnect()
{
    localStorage.clear();
    window.location.replace("../index.html");
}
function login()
{
    var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
console.log("verif");
if(email==localStorage.getItem("email")&&password==localStorage.getItem("password"))
{
    console.log("ok");
    window.location.replace("./pages/profile.html");

}
else
alert("compte inconnu!")
}