
$(document).ready(function () {
    console.log("ready!");
    loadFromFile();
    // $("#preview").load("templates/sample.html", function(){
    //     createFile();
    // });
    // $("#personalDetails").hide();
    $("#profileSummaryDetails").hide();
    $("#educationalDetails").hide();
    $("#experienceDetails").hide();
    $("#skillsDetails").hide();
    $("#hobbyDetails").hide();
    
    



});
var source = "";
var userData = new Object();
userData.educationalList = [];
userData.companyList = [];
userData.skills = [];
userData.hobbies = [];
var projectList = [];
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

    userData.educationalList.push(educational);
    console.log(JSON.stringify(userData));
}
function goToExperiencePage() {
    addEducationalData();
    $("#educationalDetails").hide();
    $("#experienceDetails").show();

}
function clearEducationalFields() {
    addEducationalData();
    $("#institutionName").val('');
    $("#course").val('');
    $("#startDate").val('');
    $("#endDate").val('');

}
function addProfileSummary() {
    $("#profileSummaryDetails").hide();
    $("#educationalDetails").show();
    var personalSummary = new Object();
    personalSummary = $("#profileSummary").val();
    userData.personalSummary = personalSummary;
    console.log(JSON.stringify(userData));
}

function addProjectDetails() {
    var projectInfo = new Object();
    projectInfo.name = $("#projectName").val();
    projectInfo.description = $("#projectDescription").val();
    projectList.push(projectInfo);
    //console.log(JSON.stringify(projectList));
    $("#projectList").append(projectInfo.name + ", ");
}
function addCompanyDetails() {
    var companyInfo = new Object();
    companyInfo.name = $("#companyName").val();
    companyInfo.designation = $("#companyDesignation").val();
    companyInfo.startDate = $("#companyStartDate").val();
    companyInfo.endDate = $("#companyEndDate").val();
    companyInfo.projectList = projectList;
    userData.companyList.push(companyInfo);
    console.log(JSON.stringify(userData));
}

function clearAndAddAnotherCompany() {
    addCompanyDetails();
    projectList = [];
    $("#companyName").val('');
    $("#companyDesignation").val('');
    $("#companyStartDate").val('');
    $("#companyEndDate").val('');
    $("#projectList").html('');

}
function goToSkillsPage() {
    addCompanyDetails();
    $("#experienceDetails").hide();
    $("#skillsDetails").show();


}
function addOneSkillToList() {
    var skillName = $("#skillName").val();
    userData.skills.push(skillName);
    $("#skillName").val('');
    $("#skillList").append('<span class="uk-badge">' + skillName + '</span>');
}
function addHobbies() {
    $("#skillsDetails").hide();
    $("#hobbyDetails").show();
}

function addOneHobbyToList() {
    var hobbyName = $("#hobbyName").val();
    userData.hobbies.push(hobbyName);
    $("#hobbyName").val('');
    $("#hobbyList").append('<span class="uk-badge">' + hobbyName + '</span>');
}
function downloadResume() {
    var json = JSON.stringify(userData);
    console.log("Complete JSON");
    console.log(json);
    // var source = loadFromFile();
    //console.log(source.responseText);
    var template = Handlebars.compile(source.responseText);
    var html = template(userData);
    // $("#preview").load(html, function(){
    //         createFile(html);
    //     });
    createFile(html);
    console.log(html);
}

function loadFromFile() {
    source = $.get("templates/sample.html", function (response) {
        var templateFile = response;
        // console.log(templateFile);
        return templateFile;
    });
}
function createFile(html){
    
    // var opt = {
    //     margin:       0.4,
    //     filename:     'myfile.pdf',
    //     image:        { type: 'jpeg', quality: 1 },
    //     html2canvas:  { scale: 5 },
    //     jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    //   };
    // html2pdf(html,opt);
   

var w = window.open();

w.document.open();
w.document.write(html);
w.document.close();


//w.close();


}