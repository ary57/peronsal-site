import React from 'react';
import Section from './Section';
import './Technologies.css';

const languages=[
  { name: 'Python', logo: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg'},
  {name: 'Javascript', logo: 'https://banner2.cleanpng.com/20180720/pjj/kisspng-javascript-logo-html-clip-art-javascript-logo-5b5188b16dbcd8.5939232615320700654495.jpg'},
]

const frontend = [
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
  { name: 'Typescript', logo: 'https://www.svgrepo.com/show/374144/typescript.svg' },
  { name: 'NextJS', logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png' },
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png' },
  { name: 'Mantine UI', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWqfPjritCCxs9EbQuN11m9fX27x4ln5nlg&s' },
]

const backend = [
  {name: 'Node.js', logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png'},
  {name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png'},
]

const databases = [
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png' },
  { name: 'MongoDB', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-226029.png?f=webp' },
  { name: 'DBeaver', logo: 'https://download.logo.wine/logo/DBeaver/DBeaver-Logo.wine.png' },
]



const tools = [
  { name: 'VS Code', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
  { name: 'Postman', logo: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8' },
  { name: 'PyCharm', logo: 'https://intellij-support.jetbrains.com/hc/user_images/Sg7SwOJLuCr9zQ6A333tpg.png' },
  { name: 'Jupyter', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png' },
]

const other = [
  { name: 'git', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
  { name: 'github', logo: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png' },
  { name: 'npm', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png' },
  { name: 'pip', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PyPI_logo.svg/496px-PyPI_logo.svg.png' },
]


const Technologies = () => {
  return (
    <div className="technologies">
      <h2>Technologies I've Worked With</h2>
      <div className="sections">
        <Section title="Languages" items={languages} />
        <Section title="Frontend" items={frontend} />
        <Section title="Backend" items={backend} />
        <Section title="Databases" items={backend} />
        <Section title="Tools" items={tools} />
        <Section title="Other" items={other} />
      </div>
    </div>
  );
};

export default Technologies;

