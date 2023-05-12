// FOOTER PART FOR ACCURATE DATE
const year = document.getElementById('year');
year.innerHTML = new Date().toDateString();

// CODE FOR THE PROJECT SECTION TO CALL DYNAMIC
const projectElement = document.getElementById('total-project');

const project = [
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
    }, {
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
    }

]

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

projectElement.innerHTML = output;