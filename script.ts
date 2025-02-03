document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generatebutton") as HTMLButtonElement;

    generateButton.addEventListener("click", (event) => {
        event.preventDefault();

        // Get user input
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const contact = (document.getElementById("contact") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const degree = (document.getElementById("name") as HTMLInputElement).value;
        const institute = (document.getElementById("place") as HTMLInputElement).value;
        const year = (document.getElementById("year") as HTMLInputElement).value;
        const grade = (document.getElementById("grading") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;

        // Validate input
        if (!name || !email || !contact || !degree || !institute || !year) {
            alert("Please fill out all required fields!");
            return;
        }

        // Generate Resume
        const resumeDiv = document.createElement("div");
        resumeDiv.innerHTML = `
            <h1>${name}'s Resume</h1>
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            
            <h2>Skills</h2>
            <p>${skills}</p>

            <h2>Education</h2>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Year:</strong> ${year}</p>
            <p><strong>Grade:</strong> ${grade}</p>

            <h2>Experience</h2>
            <p>${experience}</p>
        `;

        resumeDiv.style.border = "2px solid black";
        resumeDiv.style.padding = "20px";
        resumeDiv.style.marginTop = "20px";

        document.body.appendChild(resumeDiv);
    });
});
