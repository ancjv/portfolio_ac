//  icons
import {
  FiGithub,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPenTool,
  FiSettings,
  FiTag,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

import FiverBrandIcon from './assets/img/brands/fiverr.png';
// projects images
import Project1 from './assets/img/projects/p1.png';
import Project2 from './assets/img/projects/p2.png';
import Project3 from './assets/img/projects/p3.png';
import Project4 from './assets/img/projects/p4.png';
import Project5 from './assets/img/projects/p5.png';
import Project6 from './assets/img/projects/p6.png';
// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/java.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/php.png';
// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
// companies icons
import UpworkBrandIcon from './assets/img/brands/upwork.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'blog',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiTwitter/>,
    href: 'https://twitter.com/ancjvx',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/ancjv',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/ancjv/',
  },
];

// companies
export const brands = [
  {
    img: UpworkBrandIcon,
    href: '#',
  },
  {
    img: FiverBrandIcon,
    href: '#',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'JS Todo-List',
    category: 'javaScript',
    description: 'Language: JavaScript',
    icon: <FiGithub />,
  },
  {
    id: '2',
    image: Project2,
    name: 'Blog Cafe',
    category: 'reponsive web',
    description: 'HTML | CSS | JS',
    icon: <FiGithub />,
  },
  {
    id: '3',
    image: Project3,
    name: 'Hover Board',
    category: 'javaScript',
    description: 'JavaScript',
    icon: <FiGithub />,
  },
  {
    id: '4',
    image: Project4,
    name: 'Portfolio',
    category: 'react',
    description: 'JavaScript | React',
    icon: <FiGithub />,
  },
  {
    id: '5',
    image: Project5,
    name: 'Hulu clone',
    category: 'reponsive web',
    description: 'HTML | CSS | JavaScript',
    icon: <FiGithub />,
  },
  {
    id: '6',
    image: Project6,
    name: 'Frontend Store',
    category: 'reponsive web',
    description: 'HTML | CSS | JavaScript',
    icon: <FiGithub />,
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'javaScript',
  },
  {
    name: 'reponsive web',
  },
  {
    name: 'react',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    image: SkillImg1,
    name: 'HTML - Articles ',
    description:
      'HyperText Markup Language, refers to the markup language for the elaboration of web pages.',
    href: 'https://github.com/ancjv',
  },
  {
    icon: <FiSettings />,
    image: SkillImg2,
    name: 'CSS - Articles',
    description:
      'CSS is a styling language that allows us to provide design and representation to our websites and applications.',
    href: 'https://github.com/ancjv',
  },
  {
    icon: <FiPenTool />,
    image: SkillImg3,
    name: 'JavaScript - Articles',
    description:
      'Javascript is a programming language. Although at first it was designed to provide interactivity to web pages, today its use has been extended to the server (with Node.js) or native applications.',
  },
  {
    icon: <FiTag />,
    image: SkillImg4,
    name: 'React',
    description:
      'React is an open source library created by Facebook to create user interfaces.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at acmp.git@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Panama City, Panama',
    
  },
];
