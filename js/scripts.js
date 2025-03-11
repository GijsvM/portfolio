document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    const projects = {
        1: {
            title: "Project 1",
            images: ["assets/images/project1-1.jpg", "assets/images/project1-2.jpg", "assets/images/project1-3.jpg"],
            description: "This is the description for Project 1.",
            explanation: "Here is a detailed explanation of Project 1.",
            github: "https://github.com/username/project1"
        },
        2: {
            title: "Project 2",
            images: ["assets/images/project2-1.jpg", "assets/images/project2-2.jpg"],
            description: "This is the description for Project 2.",
            explanation: "Here is a detailed explanation of Project 2.",
            github: "https://github.com/username/project2"
        },
        3: {
            title: "Project 3",
            images: ["assets/images/project3-1.jpg", "assets/images/project3-2.jpg", "assets/images/project3-3.jpg"],
            description: "This is the description for Project 3.",
            explanation: "Here is a detailed explanation of Project 3.",
            github: "https://github.com/username/project3"
        }
        // Add more projects as needed
    };

    const project = projects[projectId];

    if (project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-description").textContent = project.description;
        document.getElementById("project-explanation").textContent = project.explanation;
        document.getElementById("project-github").href = project.github;

        const slideshowContainer = document.getElementById("slideshow-container");
        project.images.forEach((image, index) => {
            const slide = document.createElement("div");
            slide.className = "mySlides fade";
            slide.innerHTML = `<img src="${image}" style="width:100%">`;
            slideshowContainer.appendChild(slide);
        });

        // Add navigation buttons
        const prevButton = document.createElement("a");
        prevButton.className = "prev";
        prevButton.innerHTML = "&#10094;";
        prevButton.onclick = () => plusSlides(-1);
        slideshowContainer.appendChild(prevButton);

        const nextButton = document.createElement("a");
        nextButton.className = "next";
        nextButton.innerHTML = "&#10095;";
        nextButton.onclick = () => plusSlides(1);
        slideshowContainer.appendChild(nextButton);

        showSlides(slideIndex);
        setInterval(() => plusSlides(1), 5000); // Change image every 5 seconds
    } else {
        document.getElementById("project-details").innerHTML = "<p>Project not found.</p>";
    }
});

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}