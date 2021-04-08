// This code below was for passsword request page (pas_for.html) but needed online storage for it to work//


// @{
// newPassword = Request["newPassword"];
// confirmPassword = Request["confirmPassword"];
// token = Request["token"];
// if IsPost
// {
//     // input testing is ommitted here to save space
//     retunValue = ResetPassword(token, newPassword);
// }//

//switches images on explore page when hovered over them
function newImage(mydiv) {
if (mydiv.id == "supreme") {
	document.getElementById("supreme").src="images/supremetee2.jpg";
}
else if (mydiv.id == "calvin") {
	document.getElementById("calvin").src="images/calvinkleinjacket1.jpg";
}
else if (mydiv.id == "polo") {
	document.getElementById("polo").src="images/polojacket2.jpg";
}
else if (mydiv.id == "yeezy") {
	document.getElementById("yeezy").src="images/yeezy2.jpg";
}
else if (mydiv.id == "jordan") {
	document.getElementById("jordan").src="images/jordan2.jpg";
}
}//switches images on explore page when hovered over them
function oldImage(mydiv) {
if (mydiv.id == "supreme") {
	document.getElementById("supreme").src="images/supremetee1.jpg";
}

else if (mydiv.id == "calvin") {
	document.getElementById("calvin").src="images/calvinkleinjacket2.jpg";
}

else if (mydiv.id == "polo") { 
	document.getElementById("polo").src="images/polojacket1.jpg";
}
else if (mydiv.id == "yeezy") { 
	document.getElementById("yeezy").src="images/yeezy1.jpg";
}
else if (mydiv.id == "jordan") { 
	document.getElementById("jordan").src="images/jordan1.jpg";
}
}

