//C:\Users\Giebert\Desktop\Tito\my-portfolio\src\main.ts
import 'virtual:uno.css';
import './style.css'; // Import your minimal global CSS

// Define an interface for the project data structure
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string; // Optional live demo link
  imagePlaceholder: string; // URL for a placeholder image
}

// Array of your projects - you can add more here!
const projects: Project[] = [
  {
    title: "Task Manager Web App",
    description: "A responsive web application built to manage daily tasks efficiently with a clean user interface. Features include task creation, deletion, and status updates.",
    technologies: ["TypeScript", "Vite", "UnoCSS", "HTML5", "CSS3"],
    githubLink: "https://github.com/yourusername/task-manager-app",
    liveDemoLink: "https://your-task-manager-demo.vercel.app",
    imagePlaceholder: "https://placehold.co/600x400/000000/FFFFFF?text=Task+Manager"
  },
  {
    title: "Interactive Data Dashboard",
    description: "An interactive dashboard for visualizing complex datasets. Users can filter data, view charts, and export reports.",
    technologies: ["JavaScript", "D3.js", "React", "Node.js", "Express"],
    githubLink: "https://github.com/yourusername/data-dashboard",
    liveDemoLink: "https://your-data-dashboard-demo.netlify.app",
    imagePlaceholder: "https://placehold.co/600x400/000000/FFFFFF?text=Data+Dashboard"
  },
  {
    title: "E-commerce Product Page",
    description: "A dynamic product display page for an e-commerce store, featuring image carousels, product details, and add-to-cart functionality.",
    technologies: ["Next.js", "Stripe API", "Tailwind CSS", "MongoDB"],
    githubLink: "https://github.com/yourusername/ecommerce-product-page",
    imagePlaceholder: "https://placehold.co/600x400/000000/FFFFFF?text=E-commerce+Page"
  },
  {
    title: "Simple Blog Platform",
    description: "A minimalist blog platform allowing users to create, read, update, and delete posts. Includes basic user authentication.",
    technologies: ["Python", "Flask", "SQLAlchemy", "Jinja2"],
    githubLink: "https://github.com/yourusername/simple-blog",
    imagePlaceholder: "https://placehold.co/600x400/000000/FFFFFF?text=Blog+Platform"
  },
];

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // Update the current year in the footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Get the container where projects will be rendered
  const projectsGrid = document.getElementById('projects-grid');

  // Check if the projectsGrid element exists before attempting to render
  if (projectsGrid) {
    // Iterate over each project in the 'projects' array
    projects.forEach(project => {
      // Create a new div element for each project card
      const projectCard = document.createElement('div');
      // Apply UnoCSS classes for styling the card
      projectCard.className = 'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between';

      // Set the inner HTML of the project card using a template literal
      // This includes the image, title, description, technologies, and links
      projectCard.innerHTML = `
        <img src="${project.imagePlaceholder}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">${project.title}</h3>
        <p class="text-gray-600 mb-4 flex-grow">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.technologies.map(tech => `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tech}</span>`).join('')}
        </div>
        <div class="flex gap-4 mt-auto">
          <!-- GitHub Link Button -->
          <a href="${project.githubLink}" target="_blank" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
            GitHub
            <!-- GitHub Icon (SVG) -->
            <svg class="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.168 6.839 9.482.499.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.091-.645.356-1.088.649-1.339-2.22-.253-4.555-1.113-4.555-4.93 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.436 9.436 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.699 1.029 1.593 1.029 2.682 0 3.827-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.339-.012 2.419-.012 2.747 0 .268.18.583.687.484C17.146 18.164 20 14.415 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg>
          </a>
          <!-- Live Demo Link Button (only if liveDemoLink exists) -->
          ${project.liveDemoLink ? `
          <a href="${project.liveDemoLink}" target="_blank" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            Live Demo
            <!-- External Link Icon (SVG) -->
            <svg class="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          </a>
          ` : ''}
        </div>
      `;
      // Append the created project card to the projects grid
      projectsGrid.appendChild(projectCard);
    });
  }
});
