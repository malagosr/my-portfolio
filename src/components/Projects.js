import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title</h3>
        <img src="project1.jpg" alt="Project Screenshot" />
        <p>[Project Description]</p>
        <a href="https://github.com/yourprofile/project">View on GitHub</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
}

export default Projects;
