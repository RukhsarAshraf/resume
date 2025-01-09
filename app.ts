// Define an interface for the form data to enforce strong typing
interface ResumeData {
    name: string;
    email: string;
    contact: string;
    address: string;
    skills: string;
    degree: string;
    place: string;
    year: string;
    grading: string;
    experience: string;
}

// Function to handle the resume generation
function generateResume() {
    // Get the form data from input fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const place = (document.getElementById('place') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const grading = (document.getElementById('grading') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Create a ResumeData object
    const resumeData: ResumeData = {
        name,
        email,
        contact,
        address,
        skills,
        degree,
        place,
        year,
        grading,
        experience
    };

    // Check if any input is empty
    if (Object.values(resumeData).some(value => value === '')) {
        alert("Please fill all the fields!");
        return;
    }

    // Generate resume content
    const resumeContent = `
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${resumeData.name}</p>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Contact:</strong> ${resumeData.contact}</p>
        <p><strong>Address:</strong> ${resumeData.address}</p>
        
        <h3>Skills</h3>
        <p>${resumeData.skills}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${resumeData.degree}</p>
        <p><strong>Institute:</strong> ${resumeData.place}</p>
        <p><strong>Year:</strong> ${resumeData.year}</p>
        <p><strong>Grade:</strong> ${resumeData.grading}</p>

        <h3>Experience</h3>
        <p>${resumeData.experience}</p>
    `;

    // Display the generated resume
    const resumeDiv = document.getElementById('resume')!;
    const resumeContentDiv = document.getElementById('resumeContent')!;
    resumeContentDiv.innerHTML = resumeContent;
    resumeDiv.style.display = 'block';
}

// Add an event listener to the button to trigger the resume generation
document.getElementById('generateResume')!.addEventListener('click', generateResume);
