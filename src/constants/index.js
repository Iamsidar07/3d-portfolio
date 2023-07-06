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
    rogan,
    carsify,
    promptly,
    nextgenvisions,
    invactClone,
    jokeshub,
    simongame,
    drumkit,
    Netflixyy,
    microsoftStore,
    disney,
    amazon,
    fightwithme,
    rockpaperscissor,
    teslaClone,
    netflixv3,
    nftapp
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
        title: "Backend Developer",
        icon: backend,
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Rogan",
        icon: rogan,
        iconBg: "#383E56",
        date: "August 2022 - ",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
   
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Carsify",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
        ],
        image: carsify,
        sourceCodeUrl: "https://github.com/Iamsidar07/Car-Showcase",
        liveUrl: "https://car-showcase-gamma-vert.vercel.app/"
    },
    {
        name: "Nextgenvisions",
        description:
            "Web-based platform that allows users to search, create and generate prompt and generate dalle images and ability to share with the world.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
        ],
        image: nextgenvisions,
        sourceCodeUrl: "https://github.com/Iamsidar07/NextGenVisions",
        liveUrl: "https://next-gen-visions.vercel.app/"
    },
    {
        name: "Promptly",
        description:
            "Web-based platform that allows users to search, edit and share different types of prompt.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
        ],
        image: promptly,
        sourceCodeUrl: "https://github.com/Iamsidar07/Promptly",
        liveUrl: "https://promptly-rust.vercel.app/"
    },
    {
        name: "Invact Clone",
        description:
            "An Invact UI clone of the website https://invact.com/",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "html5",
                color: "pink-text-gradient",
            },
            {
                name: "css3",
                color: "blue-text-gradient",
            },
        ],
        image: invactClone,
        sourceCodeUrl: "https://github.com/Iamsidar07/Invact-clone",
        liveUrl: "https://glowing-liger-aa59cc.netlify.app/"
    },
    {
        name: "Jokeshub",
        description:
            "A combo next app for animes photos (it may contain 18+), memes ,jokes and anime's quotes🚀",
        tags: [
            {
                name: "Nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "waifu apis",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: jokeshub,
        sourceCodeUrl: "https://github.com/Iamsidar07/joke-and-animes-app",
        liveUrl: "https://joke-and-animes-app.vercel.app/"
    },
    {
        name: "Simon Game",
        description:
            "Simon is an electronic game of short-term memory skill invented by Ralph H. Baer and Howard J. Morrison. Test your memory power🧪.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: simongame,
        sourceCodeUrl: "https://github.com/Iamsidar07/Simon-Game",
        liveUrl: "https://mellifluous-salamander-38817e.netlify.app/"
    },
    {
        name: "Drum kit",
        description:
            "A drum kit (also called a drum set, trap set, or simply drums) is a collection of drumsand other auxiliary percussion instruments set up to be played by one person.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: drumkit,
        sourceCodeUrl: "https://github.com/Iamsidar07/Drum-Kit",
        liveUrl: "https://dancing-starship-d3da2a.netlify.app/"
    },
    {
        name: "Netflxyy",
        description:
            "Netflixyy is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: Netflixyy,
        sourceCodeUrl: "https://github.com/Iamsidar07/netflix-clone",
        liveUrl: "https://netflixiamsidar07.web.app/"
    },
    {
        name: "Microsoft store",
        description:
            "A microsoft store UI (user interface) ",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],
        image: microsoftStore,
        liveUrl: "https://microsoft-store.vercel.app/",
        sourceCodeUrl: "https://github.com/Iamsidar07/microsoft-store"
    },
    {
        name: "Disney Plus",
        description:
            "A movie information react-app with firebase database and also Google authentication via firebase.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "googleauth",
                color: "pink-text-gradient",
            },
        ],
        image: disney,
        sourceCodeUrl: "https://sasta-disney-plus.firebaseapp.com/",
        liveUrl: "https://github.com/Iamsidar07/hot-disney-plus"
    },
    {
        name: "Amazon",
        description:
            "A amazon clone react-app with firebase database and also Google authentication via firebase.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "googleauth",
                color: "pink-text-gradient",
            },
        ],
        image: amazon,
        sourceCodeUrl: "https://github.com/Iamsidar07/amazon-clone",
        liveUrl: "https://fir-9f669.web.app/"
    },
    {
        name: "Tesla",
        description:
            "A react app tesla ui (user interface).",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: teslaClone,
        sourceCodeUrl: "https://github.com/Iamsidar07/sasta-Tesla",
        liveUrl: "https://iamsidar07.github.io/sasta-Tesla/#"
    },
    {
        name: "Fight With Me",
        description:
            "A simple pc game of fighting .",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: fightwithme,
        sourceCodeUrl: "https://github.com/Iamsidar07/Fight-with-me",
        liveUrl: "https://fight-with-me.manojkumar239.repl.co/"
    },
    {
        name: "Rock Paper Scissor Game",
        description:
            "A rock paper scissor 🎮 Game.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: rockpaperscissor,
        sourceCodeUrl: "https://github.com/Iamsidar07/Rock-Paper-Secisor",
        liveUrl: "https://rock-paper-secisor.manojkumar239.repl.co/"
    },
    {
        name: "NFT app",
        description:
            "A simple nft marketplace ui made in reactjs and css5.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: nftapp,
        liveUrl: "https://kid-nft-app.web.app/"
    },
    {
        name: "Netflix v3",
        description:
            "A simple nft marketplace ui made in reactjs and css5.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
        ],
        image: netflixv3,
        liveUrl: "https://netflix-v3.vercel.app/"
    },
];

export { services, technologies, experiences, testimonials, projects };