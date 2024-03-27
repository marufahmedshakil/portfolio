document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();
});

function fetchProjects() {
    fetch('/api/projects')
    .then(response => response.json())
    .then(projects => {
        const projectsSection = document.getElementById('projects');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank">View Project</a>
            `;
            projectsSection.appendChild(projectElement);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));
}
