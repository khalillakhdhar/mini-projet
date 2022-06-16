function saveme()
{
var nom=document.getElementById("nom").value;
var prenom=document.getElementById("prenom").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var adresse=document.getElementById("adresse").value;
var age=document.getElementById("age").value;
var grade=document.getElementById("grade").value;
localStorage.setItem("nom",nom);
localStorage.setItem("prenom",prenom);
localStorage.setItem("age",age);
localStorage.setItem("email",email);
localStorage.setItem("password",password);
localStorage.setItem("grade",grade);
localStorage.setItem("adresse",adresse);
}
function loaddata()
{
document.getElementById("nom").value=localStorage.getItem("nom");
document.getElementById("prenom").value=localStorage.getItem("prenom");
document.getElementById("email").value=localStorage.getItem("email");
document.getElementById("password").value=localStorage.getItem("password");
document.getElementById("adresse").value=localStorage.getItem("adresse");
document.getElementById("age").value=localStorage.getItem("age");
document.getElementById("grade").value=localStorage.getItem("grade");







}