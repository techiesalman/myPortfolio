
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Techie Salman",
  title: "Hi, I'm Salman",
  subTitle: emoji("A passionate Software Developer 🚀 having experience of building Web and Mobile applications with .Net Core / Angular / Ionic and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/techiesalman/",
  github: "https://github.com/techiesalman",
  stackoverflow: "https://stackoverflow.com/users/10228422/salman"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive web and mobile applications"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ Digital Ocean"),
    emoji("⚡ Creating application backend in .Net and .Net Core")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: ".net",
      fontAwesomeClassname: "devicon-dot-net-plain"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "ionic",
      fontAwesomeClassname: "devicon-ionic-original"
    },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    {
      skillName: "typescript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain"
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "devicon-jquery-plain"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "ms sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "DigitalOcean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: false, // Set it to true to see education section
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/MULogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2012 - April 2015",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Shri T P Bhatia College Of Science",
      logo: require("./assets/images/BhatiaLogo.png"),
      subHeader: " Higher Secondary Certificate",
      duration: "June 2010 - March 2012",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    },
    {
      schoolName: "Holy Infant High School",
      logo: require("./assets/images/HIHSLogo.png"),
      subHeader: "Secondary School Certificate",
      duration: "June 2000 - April 2010",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "55%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "40%"
    },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Epicenter",
      companylogo: require("./assets/images/epiLogo.png"),
      date: "Feb 2020 – Present",
      desc: "Epicenter has Core Competence in processes like Customer Service, Collections, Sales, Transaction Processing, Data processing, Chat, and E-mail support. Their development team develops software for the internal team as well as external clients.",
      // descBullets: [
      //   "Software Design & Development - Responsible for designing various modules and developing them accordingly",
      // ]
      isshow: true
    },
    {
      role: "Software Programmer",
      company: "StrikingSpear",
      companylogo: require("./assets/images/ssLogo.png"),
      date: "Dec 2018 – Jan 2020",
      // desc: "Striking Spear is a service-based company where they are making projects as per client’s requests.",
      desc: "Striking Spear develops innovative and creative products and services that provide total software solutions. It is a service-based company where they are making projects as per the client’s requests.",
      // descBullets: [
      //   "Software Design & Development - Responsible for designing various modules and developing them accordingly",
      // ]
      isshow: true
    },
    {
      role: "Software Programmer",
      company: "Planfirma",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Dec 2018 – Jan 2020",
      desc: "Striking Spear is a service-based company where they are making projects as per client’s requests.",
      // descBullets: [
      //   "Software Design & Development - Responsible for designing various modules and developing them accordingly",
      // ]
      isshow: false
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "techiesalman", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Extra Project",
  subtitle: "STARTUP THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/JHLogo.png"),
      link: "https://www.jugaadhai.in/"
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};  



const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+91-9819046929",
  email_address: "hi@techiesalman.com",
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, contactInfo};
