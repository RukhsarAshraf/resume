document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generatebutton");
    generateButton.addEventListener("click", function (event) {
        event.preventDefault();
        // Get user input
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var degree = document.getElementById("name").value;
        var institute = document.getElementById("place").value;
        var year = document.getElementById("year").value;
        var grade = document.getElementById("grading").value;
        var experience = document.getElementById("experience").value;
        // Validate input
        if (!name || !email || !contact || !degree || !institute || !year) {
            alert("Please fill out all required fields!");
            return;
        }
        // Generate Resume
        var resumeDiv = document.createElement("div");
        resumeDiv.innerHTML = "\n            <h1>".concat(name, "'s Resume</h1>\n            <h2>Contact Information</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            \n            <h2>Skills</h2>\n            <p>").concat(skills, "</p>\n\n            <h2>Education</h2>\n            <p><strong>Degree:</strong> ").concat(degree, "</p>\n            <p><strong>Institute:</strong> ").concat(institute, "</p>\n            <p><strong>Year:</strong> ").concat(year, "</p>\n            <p><strong>Grade:</strong> ").concat(grade, "</p>\n\n            <h2>Experience</h2>\n            <p>").concat(experience, "</p>\n        ");
        resumeDiv.style.border = "2px solid black";
        resumeDiv.style.padding = "20px";
        resumeDiv.style.marginTop = "20px";
        document.body.appendChild(resumeDiv);
    });
});
