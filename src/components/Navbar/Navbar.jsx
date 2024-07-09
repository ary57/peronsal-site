import React from 'react';
import './Navbar.css';
import logo from "../../assets/logo.jpg";

const Navbar = () => {


  const resumeLink = "https://drive.google.com/file/d/1Imrm3LM76vclTYJHFjdjKI0K4_ryYbJj/view?usp=sharing"
  const githubLink = "https://github.com/ary57"
  const linkedInLink = "https://www.linkedin.com/in/abhi57/"
  
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href={resumeLink} target='_blank'>RESUME</a></li>
          <li><a href={githubLink} target='_blank'>GITHUB</a></li>
          <li><a href={linkedInLink} target='_blank'>LINKEDIN</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
