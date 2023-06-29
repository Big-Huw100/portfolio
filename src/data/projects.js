import calculator from '../images/js-calculator.png';
import toptrumps from "../images/x-men-top-trumps.png";
import morsecode from "../images/morse-code-translator.png";
import shootemup from "../images/alien-shooter.png";
import punkapi from "../images/punk-api.png";


const projects = [
    {
        "id": 1,
        "projectName": "JS Calculator",
        "projectImage": {calculator},
        "githubLink": "https://github.com/Big-Huw100/js-calculator",
        "pagesLink": "https://big-huw100.github.io/js-calculator/",
        "description": "A simple calculator built with Javascript.",
    },
    {
        "id": 2,
        "projectName": "X-MEN Top Trumps",
        "projectImage": {toptrumps},
        "altText": "Top Trumps",
        "githubLink": "https://github.com/Big-Huw100/x-men-top-trumps",
        "pagesLink": "https://big-huw100.github.io/x-men-top-trumps/",
        "description": "A game of Top Trumps featuring all your favourite X-Men characters!",
    },
    {
        "id": 3,
        "projectName": "Morse Code Translator",
        "projectImage": {morsecode},
        "altText": "Morse Code Translator",
        "githubLink": "https://github.com/Big-Huw100/morse-code-translator",
        "pagesLink": "https://big-huw100.github.io/morse-code-translator/",
        "description": "Translate English into Morse Code, and vice versa.",
    },
    {
        "id": 4,
        "projectName": "Alien Shoot 'em Up",
        "projectImage": {shootemup},
        "altText": "Alien Spaceships",
        "githubLink": "https://github.com/Big-Huw100/alien-shooter",
        "pagesLink": "https://big-huw100.github.io/alien-shooter/",
        "description": "Click the alien ships to blast them out of space!!",
    },
    {
        "id": 5,
        "projectName": "Punk IPA API",
        "projectImage": {punkapi},
        "alttext": "Punk Beers",
        "githubLink": "https://github.com/Big-Huw100/punk-api",
        "pagesLink": "https://big-huw100.github.io/punk-api/",
        "description": "A tool made to search through an API of Punk IPA beers.",
    },
];

export default projects;