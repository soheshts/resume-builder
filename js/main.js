$(document).ready(function () {
    console.log("ready!");
    
    $("#profileSummaryDetails").hide();
    $("#educationalDetails").hide();

    
});
var userData = new Object();
userData.educational = []
function addPersonalData() {
    $("#personalDetails").hide();
    $("#profileSummaryDetails").show();
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
    educational.name = $("#institutionName").val();
    educational.course = $("#course").val();
    educational.from = $("#startDate").val();
    educational.to = $("#endDate").val();
    
    userData.educational.push(educational);
    console.log(JSON.stringify(userData));
}
function clearEducationalFields() {
    addEducationalData();
    $("#institutionName").val('');
    $("#course").val('');
    $("#startDate").val('');
    $("#endDate").val('');
    
}
function addProfileSummary(){
    $("#profileSummaryDetails").hide();
    $("#educationalDetails").show();
    var personalSummary = new Object();
    personalSummary = $("#profileSummary").val();
    userData.personalSummary = personalSummary;
    console.log(JSON.stringify(userData));
}