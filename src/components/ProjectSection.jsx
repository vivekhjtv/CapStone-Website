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
      creatorName: 'Rahul Jayswal',
    },
    {
      imageUrl: 'TodoApp.png',
      projectTitle: 'Todo App',
      projectDescription: `Presenting my React Todo App! ✅🖥️ Developed to showcase my proficiency in React, this Todo App combines functionality and a clean user interface. Seamlessly managing tasks using state-of-the-art React components, this project demonstrates my skills in modern web development.`,
      creatorLink: 'https://todo-app-vivek-jethvas-projects.vercel.app/', // Replace with actual creator's link
      creatorName: 'Gaurav Hariyani',
    },
    {
      imageUrl: 'Blog.png',
      projectTitle: 'Blog Post App',
      projectDescription: `Explore the capabilities of my React Blog Post App, a dynamic platform built to empower creators. Developed with React, it integrates modern UI components, state management, and responsive design for an optimal writing and reading experience. As I delve into the world of React, I'm excited to share this project and welcome freelance opportunities.`,
      creatorLink:
        'https://github.com/vivekhjtv/v_react/tree/main/13react-social-media-app', // Replace with actual creator's link
      creatorName: 'Vivek Jethva',
    },
    {
      imageUrl: 'iscan.png',
      projectTitle: 'iScan Hospital Website',
      projectDescription: `I have create ISCAN hospital website of I-Scan Imaging Hospitality Service! This project aims to replicate the features and functionalities of the original I-Scan Imaging Hospitality Service website, offering a seamless experience for users interested in hospitality and imaging services.`,
      creatorLink: 'https://blog-story-react-e1r7.vercel.app/', // Replace with actual creator's link
      creatorName: 'Smit Shah',
    },
    {
      imageUrl: 'GB.png',
      projectTitle: 'GBSHSE Website',
      projectDescription: `An immersive official website for a school board. It has many features from displaying announcements to displaying official tenders of the school board. The website is accessible by anyone. Students can download new curriculum or study material, data and files for all the years available.`,
      creatorLink: '#', // Replace with actual creator's link
      creatorName: 'Gaurav Hariyani',
    },
    {
      imageUrl: 'GameStop.png',
      projectTitle: 'GameStop Website',
      projectDescription: `A personalized and revamped design of GameStop website. Developed and inspired with gaming platform giant Steam. This static website is a visual enhancement and demonstration of implementing static components in AngularJS.`,
      creatorLink: '#', // Replace with actual creator's link
      creatorName: 'Gaurav Hariyani',
    },
    {
      imageUrl: 'DKV.png',
      projectTitle: 'Test Platform Deep Knowledge Ventures',
      projectDescription: `Integrated elasticsearch for a near real-time auto complete
      search functionality for a huge dataset along with debouncing.Implemented and modified d3js to achieve the desired user
      interactions with network graph`,
      creatorLink: '#', // Replace with actual creator's link
      creatorName: 'Rahul Jayswal',
    },
    {
      imageUrl: 'GSL.png',
      projectTitle: 'Get Set Learn by Uniform Junction',
      projectDescription: `Developed a fully functional new theme. Integrated new xblocks. Added holland framework to show usewr personalized data.`,
      creatorLink: '#', // Replace with actual creator's link
      creatorName: 'Rahul Jayswal',
    },
    {
      imageUrl: 'smartmart.png',
      projectTitle: 'E-commerce SmartMarket Online Grocery Store',
      projectDescription: `Smart Market, an online grocery store developed with PHP and Bootstrap, offers a seamless user experience and mobile-responsive features for convenient shopping. Specializing in food items and groceries, the platform allows users to order via mobile apps, ensuring doorstep delivery. With a focus on user-friendly design and optimization for increased purchases, Smart Market aims to provide a pleasant and successful e-commerce experience.`,
      creatorLink: '#', // Replace with actual creator's link
      creatorName: 'Smit Shah',
    },
    {
      imageUrl: 'sportify.png',
      projectTitle: 'Sportify Music Application - clone',
      projectDescription: ` Sportify, a music streaming application that brings you the ultimate experience in discovering, listening, and sharing your favorite tunes. Inspired by the popular music streaming service, Sportify Clone offers a seamless and user-friendly platform where music enthusiasts can explore an extensive library of songs, create personalized playlists, and enjoy a curated selection of tracks across various genres.`,
      creatorLink: 'https://github.com/vivekhjtv/Sporify-clone', // Replace with actual creator's link
      creatorName: 'Smit, Gaurav, Vivek',
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
