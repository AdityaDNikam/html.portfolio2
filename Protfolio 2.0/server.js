const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Projects data
const projects = [
    {
        name: 'URL Shortener',
        description: 'A full-stack URL shortening web application built with Node.js and EJS. Generate compact, shareable short links from long URLs with a clean and intuitive interface.',
        tags: [
            { label: 'EJS', color: 'text-teal-400 bg-teal-400/10' },
            { label: 'Node.js', color: 'text-green-400 bg-green-400/10' },
            { label: 'JavaScript', color: 'text-yellow-400 bg-yellow-400/10' }
        ],
        gradient: 'from-teal-600 via-cyan-700 to-blue-800',
        icon: '&#128279;',
        liveUrl: null,
        githubUrl: 'https://github.com/AdityaDNikam/Urlshortner_project'
    },
    {
        name: 'Simon Game',
        description: 'A classic browser-based Simon memory game built with vanilla JavaScript. Test your memory by repeating increasingly long sequences of coloured button flashes.',
        tags: [
            { label: 'JavaScript', color: 'text-yellow-400 bg-yellow-400/10' },
            { label: 'HTML5', color: 'text-orange-400 bg-orange-400/10' },
            { label: 'CSS3', color: 'text-blue-400 bg-blue-400/10' }
        ],
        gradient: 'from-purple-700 via-violet-700 to-indigo-800',
        icon: '&#127918;',
        liveUrl: 'https://adityandnikam.github.io/simon-game/',
        githubUrl: 'https://github.com/AdityaDNikam/simon-game'
    },
    {
        name: 'Python Projects',
        description: 'A collection of Python projects including a rule-based chatbot, a console calculator, a Tic-Tac-Toe game, and a to-do list app - showcasing core Python programming skills.',
        tags: [
            { label: 'Python', color: 'text-blue-300 bg-blue-300/10' },
            { label: 'CLI', color: 'text-gray-300 bg-gray-300/10' },
            { label: 'OOP', color: 'text-pink-400 bg-pink-400/10' }
        ],
        gradient: 'from-blue-700 via-sky-700 to-cyan-800',
        icon: '&#128013;',
        liveUrl: null,
        githubUrl: 'https://github.com/AdityaDNikam/Python-projects'
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { projects });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
