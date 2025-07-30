import 'virtual:uno.css'
import './style.css'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  liveDemoLink?: string
  imagePlaceholder: string
}

const projects: Project[] = [
  {
    title: "Veterinary Pet Shop Management System",
    description: "An offline solution for daily operations in veterinary clinics and pet shops.",
    technologies: ["VB.NET", "MySQL", "Visual Studio"],
    liveDemoLink: "https://www.canva.com/design/DAFi5c44Z5s/C0t6PUsgFnAMCDUITgfFeg/view",
    imagePlaceholder: "https://imgur.com/f6gpSdS.jpg"
  },
  {
    title: "Flask API for DB Management",
    description: "A CRUD API using PostgreSQL and Firebase for mobile and web integration.",
    technologies: ["Python", "Flask", "PostgreSQL", "Firebase"],
    githubLink: "https://github.com/GieExe/Agreemo_API_V2",
    imagePlaceholder: "https://imgur.com/l8C0ESh.jpg"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year')
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString()

  const projectsGrid = document.getElementById('projects-grid')
  if (!projectsGrid) return

  const menuBtn = document.getElementById("menu-toggle");
  const menuList = document.getElementById("mobile-menu");

  menuBtn?.addEventListener("click", () => {
    menuList?.classList.toggle("hidden");
  });

  projects.forEach((project) => {
    const card = document.createElement('div')
    card.className = 'bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all animate-fade-in-up'

    card.innerHTML = `
      <img src="${project.imagePlaceholder}" alt="${project.title}" class="w-full h-48 object-cover rounded mb-4">
      <h3 class="text-xl font-semibold text-white mb-2">${project.title}</h3>
      <p class="text-gray-400 mb-4">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.technologies.map(t => `<span class="bg-blue-600 text-white px-2 py-0.5 text-xs rounded">${t}</span>`).join('')}
      </div>
      <div class="flex gap-4">
        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="text-blue-400 hover:underline">GitHub</a>` : ''}
        ${project.liveDemoLink ? `<a href="${project.liveDemoLink}" target="_blank" class="text-blue-400 hover:underline">More Info</a>` : ''}
      </div>
    `
    projectsGrid.appendChild(card)
  })
})
