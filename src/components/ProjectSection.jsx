import React from 'react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const ProjectSection = () => {
  // Add your project data here
  const projects = [
    {
      imageUrl: 'portfolio.png',
      projectTitle: 'My Portfolio Site',
      projectDescription: `A portfolio website is a unique way to showcase your work
      and let others know about yourself. It's like an evergreen
      platform for your projects, case studies, and information
      about you. I made portfolio website for improve my Front-end skills
      and improve my knowledge and also I am open to freelance
      opportunities, particularly those involving challenging or
      extensive projects.`,
      creatorLink: 'https://github.com/vivekhjtv/vivek-portfolio', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    {
      imageUrl: 'Lapino.png',
      projectTitle: 'La Pinoz Pizza',
      projectDescription: `Introducing my Lapinoz Pizza Clone Project! 🍕🖥️ Built to elevate my front-end skills, this clone mirrors the user experience of the original website using HTML, CSS, Bootstrap, and JavaScript. Open to freelance opportunities, this project showcases my proficiency in web development. Explore the clone and connect for inquiries or collaborations!`,
      creatorLink: 'https://github.com/vivekhjtv/vivek-portfolio', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    {
      imageUrl: 'oneplus.png',
      projectTitle: 'One Plus',
      projectDescription: `Introducing my OnePlus Clone Project! 📱🖥️ Crafted to refine my front-end skills, this clone replicates the sleek design and functionality of the OnePlus website. Developed using HTML, CSS, Bootstrap, and JavaScript, it's a showcase of my web development prowess. Open to freelance opportunities, this project reflects my commitment to delivering high-quality projects. Explore the clone and connect for inquiries or collaborations!`,
      creatorLink: 'https://github.com/vivekhjtv/vivek-portfolio', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    {
      imageUrl: 'TodoApp.png',
      projectTitle: 'Todo App',
      projectDescription: `Presenting my React Todo App! ✅🖥️ Developed to showcase my proficiency in React, this Todo App combines functionality and a clean user interface. Seamlessly managing tasks using state-of-the-art React components, this project demonstrates my skills in modern web development.`,
      creatorLink:
        'https://github.com/vivekhjtv/v_react/tree/main/07reactTodoContext', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    {
      imageUrl: 'Blog.png',
      projectTitle: 'Blog Post App',
      projectDescription: `Explore the capabilities of my React Blog Post App, a dynamic platform built to empower creators. Developed with React, it integrates modern UI components, state management, and responsive design for an optimal writing and reading experience. As I delve into the world of React, I'm excited to share this project and welcome freelance opportunities.`,
      creatorLink:
        'https://github.com/vivekhjtv/v_react/tree/main/13react-social-media-app', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    // Add other projects
  ];

  return (
    <section className="project" id="projects">
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontFamily: 'Aladin' }}>
          Our Projects
        </h2>

        <p
          style={{ fontSize: '28px', color: '#ffe900', fontFamily: 'Allura' }}
          className="text-center"
        >
          Explore the projects we have worked on.
        </p>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
