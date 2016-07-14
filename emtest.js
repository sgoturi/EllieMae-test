$(document).ready(function(){	
$("#logo").fadeTo("slow", 0.4);
$("#webinarButton").click(function(){
        $("#webinarButton").parent().css("background-color", "pink");
});
$("#testimonialButton").click(function(){
		$("#testimonialButton").parent().css("background-color", "pink");
});
});
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}