console.log("script loaded");

// Theme toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change button text
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Light Mode";
        } else {
            themeToggle.textContent = "Dark Mode";
        }
    });
}

// Toggle skills
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

if (toggleSkills && skillsSection) {
    toggleSkills.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");
    });
}

// Form validation
const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
        } else {
            alert("Form submitted successfully!");
        }

    });
}