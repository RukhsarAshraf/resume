"use strict";
// Function to handle the resume generation
function generateResume() {
    // Get the form data from input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var degree = document.getElementById('degree').value;
    var place = document.getElementById('place').value;
    var year = document.getElementById('year').value;
    var grading = document.getElementById('grading').value;
    var experience = document.getElementById('experience').value;
    // Create a ResumeData object
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        address: address,
        skills: skills,
        degree: degree,
        place: place,
        year: year,
        grading: grading,
        experience: experience
    };
    // Check if any input is empty
    if (Object.values(resumeData).some(function (value) { return value === ''; })) {
        alert("Please fill all the fields!");
        return;
    }
    // Generate resume content
    var resumeContent = "\n        <h3>Personal Details</h3>\n        <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n        <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n        <p><strong>Contact:</strong> ").concat(resumeData.contact, "</p>\n        <p><strong>Address:</strong> ").concat(resumeData.address, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(resumeData.skills, "</p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(resumeData.degree, "</p>\n        <p><strong>Institute:</strong> ").concat(resumeData.place, "</p>\n        <p><strong>Year:</strong> ").concat(resumeData.year, "</p>\n        <p><strong>Grade:</strong> ").concat(resumeData.grading, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(resumeData.experience, "</p>\n    ");
    // Display the generated resume
    var resumeDiv = document.getElementById('generatebutton');
    // var resumeContentDiv = document.getElementById('resumeContent');
    // resumeContentDiv.innerHTML = resumeContent;
    resumeDiv.style.display = 'block';
}
// Add an event listener to the button to trigger the resume generation
document.getElementById('generateResume').addEventListener('click', generateResume);
generatePDF(resumeData);
