import SimonGame from '../assets/image/Simon-Game.png';
import SnapNote from '../assets/image/Snap-Note.png';
import GIS from '../assets/image/GIS.png';

const cards = [
    {
        id: 1,
        image: SimonGame,
        title: 'Simon Game',
        alt: 'Simon-Game',
        link: 'https://rodelgn.github.io/Simon-Game/',
        githubLink: 'https://github.com/rodelgn/Simon-Game',
        paragraph: 'Simon Game is a browser-based remake of the classic memory game, built with HTML, CSS, and jQuery. It features a start button, strict mode for added challenge, and works smoothly on both desktop and mobile.',
    },
    {
        id: 2,
        image: SnapNote,
        title: 'SnapNote',
        alt: 'Snap-Note',
        link: 'https://snap-note-sandy.vercel.app/',
        githubLink: 'https://github.com/rodelgn/snap-note',
        paragraph: "SnapNote is your ultimate companion for quick, on-the-go note-taking. Built with Reactjs and Designed for simplicity and speed, SnapNote lets you capture ideas, reminders, and to-do lists in an instant. Whether you're jotting down a thought during a meeting, saving a quick grocery list, or organizing tasks for the day, SnapNote keeps everything at your fingertips."
    },
    {
        id: 3,
        image: GIS,
        title: 'GIS Tax Mapping Web Application',
        alt: 'GIS Web Application',
        link: 'https://gis-clonev2.vercel.app/',
        githubLink: 'https://github.com/rodelgn/GIS-CloneV2',
        paragraph: 'The GIS Tax Mapping Web App is a cloned frontend of a previous tax mapping project designed for local government use. Built with React and Leaflet, it features an interactive map for exploring tax-related data like property boundaries and assessments, offering a user-friendly way to visualize and analyze geographic tax information. you login with the following credentials: Username: admin Password: 12345',
    }
];

export default cards;