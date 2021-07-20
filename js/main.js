$(document).ready(function () {
    console.log("ready!");
    $("#educationalDetails").hide();

    
});
var userData = new Object();
userData.educational = []
function addPersonalData() {
    $("#personalDetails").hide();
    $("#educationalDetails").show();
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
function addEducationalData() {
    
    var educational = new Object();
    educational.name = $("#collegeName").val();
    educational.course = $("#course").val();
    educational.from = $("#collegeFromDate").val();
    educational.to = $("#collegeEndDate").val();
    
    userData.educational.push(educational);
    console.log(JSON.stringify(userData));
}
function clearEducationalFields() {
    addEducationalData();
    $("#collegeName").val('');
    $("#course").val('');
    $("#collegeFromDate").val('');
    $("#collegeEndDate").val('');
    
}