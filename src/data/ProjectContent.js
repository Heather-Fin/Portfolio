//Project images
import DiversityHubProjectImg from '../assets/diversity-hub-screenshot.jpg';
import ImgPlaceholder from '../assets/placeholder-square.jpg';
import PeriodicTableImg from '../assets/periodic-table.jpg';

//Icon images
import GitHubIcon from '../assets/github-logo-icon.png';
import YouTubeIcon from '../assets/youtube-logo-icon.png';

export default [
    {
        //Portfolio Project
        title:"Portfolio Page",
        date: "August, 2019",
        description:"I built this portfolio page as a way to showcase some of my work. I used HTML, CSS, and React JavaScript to create this page and will be iterating on it as I grow as a developer.",
        img: ImgPlaceholder,
        link: "https://github.com/Heather-Fin/Portfolio",
        icon: GitHubIcon,
    },
    {
        //IBM Project
        title:"IBM Incubator Project",
        date: "June - August, 2019",
        description:"While interning as a Front-End Developer at IBM, I was able to build out a prototype of my team's incubator project. Collaborating with our designers, I built a functional prototype based on IBM's design guidelines. To do this, I utilized the React Carbon Components library as well as React, CSS, and HTML.",
        img: DiversityHubProjectImg,
        link: "https://github.com/Heather-Fin/Divergent-Prototype",
        icon: GitHubIcon,
    },
    {
        //VR Project
        title:"Virtual Reality Periodic Table",
        date: "January - May, 2019",
        description:"For the HTC Vive, I developed a virtual reality interactive Periodic Table of Elements designed for learning about the elements and their atomic structures. Players can leverage in game quiz mechanics to improve their knowledge of the periodic table. In addition, a free-play mode is available which enables the user to freely build the first 10 elements in the periodic table.",
        img: PeriodicTableImg,
        link: "https://www.youtube.com/watch?v=rEt5OQfS6xY",
        icon: YouTubeIcon,
    }
]