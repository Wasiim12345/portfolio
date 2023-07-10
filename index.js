// FOOTER PART FOR ACCURATE DATE
const year = document.getElementById('year');
year.innerHTML = new Date().toDateString();

// OBJECT STARTS FOR THE PROJECT SECTION TO CALL DYNAMIC
const projectElement = document.getElementById('total-project');

const project = [
    // HTML-CSS PROJECT STARTS HERE
    {
        name: 'Food Web using HTML-CSS',
        image: 'foods-web.png',
        githubURL: 'https://github.com/Wasiim12345/1st-Assignment-EdYoda/blob/main/assignment1.html',
        liveURL: 'https://wasiim12345.github.io/1st-Assignment-EdYoda/assignment1.html'
    },
    {
        name: 'Edyoda Stories',
        image: 'edyoda-stories.png',
        githubURL: 'https://github.com/Wasiim12345/assignment-edyoda-stories/blob/main/assignment2.html',
        liveURL: 'https://wasiim12345.github.io/assignment-edyoda-stories/assignment2.html'
    },
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
    }
    // JAVASCRIPT PROJECTS ENDS HERE

]
// OBJECT ENDS FOR THE PROJECT SECTION

// OBJECT STARTS FOR THE SKILLS SECTCTION TO CALL DYNAMIC
const skillsElement = document.getElementById('skill');

const skills = [
    {
        name: 'HTML5 / CSS3',
        percentage: 95
    },
    // {
    //     name: 'CSS3',
    //     percentage: 95
    // },
    {
        name: 'JavaScript',
        percentage: 90
    },
    {
        name: 'Bootstrap',
        percentage: 100
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
        percentage: 85
    },
    {
        name: 'Node.js',
        percentage: 90
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
for(let i = 0; i < skills.length; i++) {
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