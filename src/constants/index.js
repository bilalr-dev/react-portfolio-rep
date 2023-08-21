import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web developement internship",
    company_name: "Beekom",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "I redisigned three web applications using HTML, CSS, Java Script, PHP, React.js and Tailwind CSS.",
      "I Made sure all applications were matching SEO standards.",
      "I Tested the website using Selenium and JMeter.",
    ],
  },
  {
    title: "Entrepreneur",
    company_name: "MobileHouse",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2016 - September 2022",
    points: [
      "I've been specializing in smartphone maintenance and Installing home security devices.",
      "I Provided courses for several people who were interested in learning the field of electronics.",
     ],
  },
  {
    title: "Lecturer",
    company_name: "TahseenTeam Morocco",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2017 - June 2018",
    points: [
      "Delivered over 50 lectures and trained more than 150 individuals in the field of electronics",
      "Gave courses about techniques used in smartphone hardware and software.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet. Qui aliquam recusandae et amet voluptatum sed sapiente consectetur et aliquid magni. Vel soluta corporis non pariatur quam est illum cumque non autem suscipit?",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ut impedit eligendi est libero repudiandae ab cumque illo et omnis consequatur. Ut molestiae tempore est molestias nostrum ea veniam temporibus aut facilis numquam At veritatis autem in galisum quam.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Quo obcaecati facere aut omnis consequatur nam molestiae ipsam sit aspernatur rerum qui numquam pariatur est autem voluptas.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bioui Travaux",
    description:
      "The website provides information about the company's services, projects, and team. It also allows visitors to contact the company and get a quote for their construction needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Colaimo",
    description:
      "The website provide information about the cooperative's products, services, and sustainability commitments",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "wordpress",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
