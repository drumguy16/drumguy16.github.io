$(document).ready(function(){
    $("#first-project").click(function(){
        $("#project-2").fadeOut("fast");
        $("#project-1").fadeIn("slow");
        // $("#div3").fadeToggle(3000);
    });
    $("#second-project").click(function(){
        $("#project-1").fadeOut("fast");
        $("#project-2").fadeIn("slow");
        // $("#div3").fadeToggle(3000);
    });
});