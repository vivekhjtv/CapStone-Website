import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TeamSection from './components/TeamSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import gauravimage from './images/gauravimage.jpeg';
import vivekimage from './images/vivekimage.jpeg';
import smitimage from './images/smitimage.png';
import rahulimage from './images/rahulimage.jpeg';

const App = () => {
  const teamMembers = [
    {
      name: 'Gaurav Hariyani',
      role: 'Full-Stack Developer',
      description: `I have completed my bachelor's degree in computer applications and am currently pursuing Information Technology Solutions at Humber. I have two years of experience in full-stack domain where I have built many websites. I have expertise in AngularJS, PHP, MySQL, SQL server and deploying websites using AWS EC2 instance. My objective is to utilize my expertise to contribute to organizational projects and foster our collective advancement.`,
      githubLink: '#', // Replace with actual GitHub link
      linkedinLink: 'https://www.linkedin.com/in/gaurav-hariyani/',
      imagePath: gauravimage,
    },
    {
      name: 'Vivek Jethva',
      role: 'Full-Stack Developer',
      description: `Currently pursuing Information Technology Solutions at Humber College. I have almost two years of experience as Web Developer. I am proficient in ReactJS, JavaScript, Bootstrap, Material UI, NodeJS, ExpressJS,  and RESTful API. My aim is to obtain a Full Stack developer position in an esteemed company, where I can make a significant impact on the organization's success and growth while advancing professionally.`,
      githubLink: 'https://github.com/vivekhjtv',
      linkedinLink: 'https://www.linkedin.com/in/vivekhjtv/',
      imagePath: vivekimage,
    },
    {
      name: 'Smit Shah',
      role: 'Full-Stack Developer',
      description: `Currently I’m pursuing Information Technology Solutions at Humber College. I am an experienced full-stack developer with a six-month internship. I'm proficient in MySQL, SQL Server, Bootstrap, JavaScript, NodeJS , ExpressJS, React, and Tailwind CSS. My goal is to secure a Full Stack Developer role in a dynamic company, where I can utilize my skills, contribute to exciting projects, and grow together.`,
      githubLink: '#', // Replace with actual GitHub link
      linkedinLink: '#', // Replace with actual LinkedIn link
      imagePath: smitimage,
    },
    {
      name: 'Rahul Jayswal',
      role: 'Full-Stack Developer',
      description: `Recently, I’m pursuing Information Technology Solutions at Humber College. I have one and half year of experience as a Full Stack Python Developer with specialization in Python, Django, OpenedX, JavaScript, jQuery, Bootstrap, Mysql and Postgresql. My objective is to be a part of an organization where I can constantly learn and develop my skills and make best use of it for the well-being of the organization.`,
      githubLink: '#', // Replace with actual GitHub link
      linkedinLink: '#', // Replace with actual LinkedIn link
      imagePath: rahulimage,
    },
  ];

  return (
    <>
      <Navbar />
      <Banner id="home" />
      <TeamSection id="team" teamMembers={teamMembers} />
      <ProjectSection id="projects" />
      <ContactSection id="contact" />
    </>
  );
};

export default App;
