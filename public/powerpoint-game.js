let timeLeft = 60;
let score = 0;
let level = 1;
let startTime = Date.now();
let titleColor = 'black';

const pptTasks = [
    { task: 'Sarlavha rangini qizil qilib o\'zgartiring', requirement: 'red-title' },
    { task: 'Slayd fonini ko\'k qilib o\'zgartiring', requirement: 'blue-bg' },
    { task: 'Sarlavhani "Tabrik!" ga o\'zgartiring', requirement: 'title-change' }
];

let currentTask = 0;

// Timer
setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endGame();
    }
}, 1000);

function changeSlideTitle() {
    const newTitle = prompt('Yangi sarlavha kiriting:');
    if (newTitle) {
        document.getElementById('slideTitle').innerText = newTitle;
    }
}

function changeSlideColor() {
    const color = prompt('Rangni kiriting (red/blue/green/yellow):');
    if (color) {
        document.getElementById('slideTitle').style.color = color;
        titleColor = color;
    }
}

function changeBackground() {
    const color = prompt('Fon rangini kiriting (hex code): #');
    if (color) {
        document.getElementById('slide').style.backgroundColor = '#' + color;
    }
}

function checkPPTAnswer() {
    const task = pptTasks[currentTask];
    let isCorrect = false;
    
    if (task.requirement === 'red-title') {
        isCorrect = titleColor === 'red';
    } else if (task.requirement === 'blue-bg') {
        const bgColor = window.getComputedStyle(document.getElementById('slide')).backgroundColor;
        isCorrect = bgColor.includes('0, 0, 255');
    } else if (task.requirement === 'title-change') {
        const title = document.getElementById('slideTitle').innerText;
        isCorrect = title.includes('Tabrik');
    }
    
    if (isCorrect) {
        score += 10 * level;
        document.getElementById('score').textContent = score;
        
        currentTask++;
        if (currentTask >= pptTasks.length) {
            currentTask = 0;
            level++;
            document.getElementById('level').textContent = level;
        }
        
        document.getElementById('task').textContent = pptTasks[currentTask].task;
        alert('✅ To\'g\'ri!');
    } else {
        alert('❌ Noto\'g\'ri. Qayta urinib ko\'ring!');
    }
}

function quitGame() {
    endGame();
}

function endGame() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    saveGameScore('powerpoint', score, level, timeSpent);
    
    alert(`🎮 O'yin tugadi!\n\nJami Ball: ${score}\nDaraja: ${level}\nVaqt: ${timeSpent}s`);
    window.location.href = 'index.html';
}