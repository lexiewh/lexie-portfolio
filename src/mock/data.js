import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lexie White | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Lexie White's Coding Projects Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Lexie White',
  subtitle: "and I'm a Fullstack Developer",
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hello everyone! My name is Lexie White and I am a recent college graduate from the University of Iowa
                 with a degree in Computer Science. I am currently working as a Technology Development Associate at Wellmark
                 Blue Cross Blue Shield.`,
  paragraphTwo: `This portfolio is designed to showcase my personal projects and I work to strengthen my fullstack development
                  skills. Below you will be able to see some projects that I have built through tutorials and my own projects.`,
  paragraphThree: 'Please feel free to contact me with any inquiries.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_pictures/bakery_bytes.png',
    title: 'Bakery Bytes Online Store',
    info: `This project is a fake bakery store front built with React. This is a fullstack application with an ExpressJS backend.`,
    info2: `It is fully deployed to Firebase, but some features are still under development.`,
    url: 'https://bakery-bytes.web.app/',
  },
  {
    id: nanoid(),
    img: 'project_pictures/pomodoro.png',
    title: 'React Pomodoro Timer',
    info: `This is a productivity timer using the Pomodoro Technique. The user can input their times and a second page
            will show up to time the users work.`,
    info2: 'This application was deployed with Firebase.',
    url: 'https://react-pomodoro-app.web.app/',
    repo: 'https://github.com/lexiewh/react-pomodoro-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_pictures/react-translate.png',
    title: 'Translate App with React',
    info: `A simple appliaction using Google's translate API.`,
    info2: 'This application was deployed with Firebase.',
    url: 'https://react-translate-342c1.web.app/',
    repo: 'https://github.com/lexiewh/react-translate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_pictures/random_quote.png',
    title: 'Random Quote Generator',
    info: `Display a random quote, and generate a new one by clicking a button. Built with React, Bootstrap and Redux.`,
    info2: 'This application was deployed with Firebase.',
    url: 'https://random-quote-generator-1.web.app/',
    repo: 'https://github.com/lexiewh/random-quote-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_pictures/local_library.png',
    title: 'Local Library',
    info: `This application is a local library built with Express and a Mongo Database. This application is not an original idea
            and was built with the link below.`,
    info2:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website',
    url: 'https://express-local-library-028.herokuapp.com/',
    repo: 'https://github.com/lexiewh/express-local-library', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_pictures/messageboard.png',
    title: 'Mini Message Board',
    info: `The mini message board application is also a Node JS project built with Express. This is a simple application
            but shows the ability to store, capture, and display data.`,
    info2: '',
    url: 'https://mini-messageboard-028.herokuapp.com/',
    repo: 'https://github.com/lexiewh/mini-message-board', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_pictures/WebAPI_intro.png',
    title: 'Spotify Archive',
    info: `This is a python script I developed to take a spotify playlist and then archive it in another playlist based on the current
            month. This is a command line script with no live demo and all of the information can be found in the README of the 
            git repository.`,
    info2: '',
    url: '/',
    repo: 'https://github.com/lexiewh/spotify-archive', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Great!',
  btn: "Let's talk",
  email: 'lexwhite028@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/lwhite-528',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lexiewh',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
