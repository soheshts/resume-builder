$(document).ready(function () {
    console.log("ready!");
    
});
var userData = new Object();
function addPersonalData() {
    console.log($("#name").val());
    var personal = new Object();
    personal.name = $("#name").val();
    personal.designation = $("#designation").val();
    personal.email = $("#email").val();
    personal.phone = $("#phone").val();
    personal.dob = $("#dob").val();
    personal.github = $("#github").val();
    personal.twitter = $("#twitter").val();
    personal.website = $("#website").val();
    userData.personal = personal;
    console.log(JSON.stringify(userData));
}
