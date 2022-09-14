const logotext = "Ch1r1";
const pro1 = require("./img/proyect1.png")
const pro2 = require("./img/memo.png")
const meta = {
    title: "Cristian Albornoz",
    description: "I'm Cristian Albornoz Full Stack Developer, I live in Argentina",
};

const introdata = {
    title: "Soy Cristian Albornoz",
    animated: {
        first: "Bienvenido...",
        second: "Soy un apasionado por la Tecnología..",
        third: "I'm a Trainne Full-Stack Developer",
    },
    description: "Si puedes imaginarlo  puedes programarlo",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Un Poco sobre Mí..",
    aboutme: "",
};

const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [
    {
        img: pro2,
        desctiption: "Juego de memoria.\nTegnologias React",
        link: "https://memo-tes.netlify.app",
    },
    {
        img: pro1,
        desctiption: "App del clima.\nTegnologias React",
        link: "https://weather-app-chiri.netlify.app/",
    }


];

const contactConfig = {
    YOUR_EMAIL: "",
    YOUR_FONE: "",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ktyve8g",
    YOUR_TEMPLATE_ID: "template_oio6tfm",
    YOUR_USER_ID: "RqLLv1-lEQYMgis4p",
};

const socialprofils = {
    github: "https://github.com/ema9948",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/cristianalbornozedp/",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    twitch: "https://twitch.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
