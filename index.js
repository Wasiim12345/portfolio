// FOR THE HAMBURGER MENU
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
});


// FOOTER PART FOR ACCURATE DATE
const year = document.getElementById('year');
year.innerHTML = new Date().toDateString();

// OBJECT STARTS FOR THE PROJECT SECTION TO CALL DYNAMIC
const projectElement = document.getElementById('total-project');

const project = [
    // HTML-CSS PROJECT STARTS HERE
    {
        name: 'Stunning Landing Page',
        image: 'stunning-landing-page.png',
        githubURL: 'https://github.com/Wasiim12345/assignment-landing-webpage/blob/main/index.html',
        liveURL: 'https://wasiim12345.github.io/assignment-landing-webpage/'
    },
    {
        name: 'HTMAL-CSS Project',
        image: 'html-css-project.png',
        githubURL: 'https://github.com/Wasiim12345/nuuk-project/blob/main/index.html',
        liveURL: 'https://wasiim12345.github.io/nuuk-project/'
    },
    // HTML-CSS PROJECTS ENDS HERE

    // JAVASCRIPT PROJECTS STARTS HERE
    {
        name: 'Calculator using JavaScript',
        image: 'calculator-js.png',
        githubURL: 'https://github.com/Wasiim12345/calculator/blob/main/Calculator.html',
        liveURL: 'https://wasiim12345.github.io/calculator/Calculator.html'
    },
    {
        name: 'Quiz using JavaScript',
        image: 'quiz-app-js.png',
        githubURL: 'https://github.com/Wasiim12345/quiz-app/blob/main/index.html',
        liveURL: 'https://wasiim12345.github.io/quiz-app/'
    },
    {
        name: 'Grid JS Assignment',
        image: 'html-grid-js.png',
        githubURL: 'https://github.com/Wasiim12345/assign.-js-html-grid/blob/main/index.html',
        liveURL: 'https://wasiim12345.github.io/assign.-js-html-grid/'
    },
    {
        name: 'Event JS Assignment',
        image: 'events-js.png',
        githubURL: 'https://github.com/Wasiim12345/javascript-event/blob/main/index.html',
        liveURL: 'https://wasiim12345.github.io/javascript-event/'
    },
    {
        name: 'E-commerce project using JavaScript',
        image: 'shoplane.png',
        githubURL: 'https://github.com/Wasiim12345/shoplane-project',
        liveURL: 'https://wasiim12345.github.io/shoplane-project/'
    },
    // JAVASCRIPT PROJECTS ENDS HERE

    // REACT.JS PROJECTS STARTS HERE
    {
        name: 'Weather Application using React.js',
        image: 'weather.png',
        githubURL: 'https://github.com/Wasiim12345/weather_app',
        liveURL: 'https://wasiim12345.github.io/weather_app/'
    }
    // REACT.JS PROJECTS ENDS HERE

]
// OBJECT ENDS FOR THE PROJECT SECTION

// OBJECT STARTS FOR THE SKILLS SECTCTION TO CALL DYNAMIC
const skillsElement = document.getElementById('skill');

const skills = [
    {
        name: 'HTML5 / CSS3',
        percentage: 90
    },
    {
        name: 'JavaScript',
        percentage: 85
    },
    {
        name: 'Bootstrap',
        percentage: 95
    },
    {
        name: 'React.js',
        percentage: 80
    },
    {
        name: 'MySQL',
        percentage: 90
    },
    {
        name: 'MongoDB',
        percentage: 90
    },
    {
        name: 'Express.js',
        percentage: 80
    },
    {
        name: 'Node.js',
        percentage: 80
    }

]
// OBJECT ENDS FOR THE SKILLS SECTCTION TO CALL DYNAMIC


// JAVASCRIPT CODE FOR PROJECT SECTION TO CALL DYNAMIC
let output = '';
for (let i = 0; i < project.length; i++) {
    output += `
    <div class="project">
        <img src="images/${project[i].image}" alt="Food Web using HTML/CSS">
         <div class="content">
             <p>${project[i].name}</p>
             <p class="icons">
                 <a target="_blank" href="${project[i].githubURL}"><img src="images/github.svg" alt="GitHub Link"></a>
                 <a target="_blank" href="${project[i].liveURL}"><img src="images/external-link.svg" alt="Live Link"></a>
             </p>
         </div>
    </div>`
}

// SKILLS STRING LITERAL PART STARTS HERE
let result = '';
let skillRemaining;
for (let i = 0; i < skills.length; i++) {
    skillRemaining = 100 - skills[i].percentage;
    result += `
    <div class="skill-name">
                <div class="tech-name">${skills[i].name}</div>
                <div class="tech-skill">
                    <div class="skill-show" style="width: ${skills[i].percentage}%;"></div>
                    <div class="skills-per" style="width: ${skillRemaining}%;">${skills[i].percentage}%</div>
                </div>
            </div>`
}
// SKILLS STRING LITERAL PART ENDS HERE


projectElement.innerHTML = output;
skillsElement.innerHTML = result;