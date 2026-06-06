let timeLeft = 60;
let score = 0;
let level = 1;
let startTime = Date.now();

const tasks = [
    { text: "Matnni Bold qilib yozing: 'Salom Dunyo'", format: 'bold', answer: 'Salom Dunyo' },
    { text: "Matnni Italic qilib yozing: 'Assalomu alaykum'", format: 'italic', answer: 'Assalomu alaykum' },
    { text: "Matnni Underline qilib yozing: 'Officer Games'", format: 'underline', answer: 'Officer Games' }
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

// Format text
function formatText(format) {
    if (format === 'bold') {
        document.execCommand('bold');
    } else if (format === 'italic') {
        document.execCommand('italic');
    } else if (format === 'underline') {
        document.execCommand('underline');
    }
}

function changeColor() {
    const color = prompt('Rangni kiriting (hex code): #');
    if (color) {
        document.execCommand('foreColor', false, '#' + color);
    }
}

// Check answer
function checkAnswer() {
    const editor = document.getElementById('editor');
    const text = editor.innerText.trim();
    
    if (text === tasks[currentTask].answer) {
        score += 10 * level;
        document.getElementById('score').textContent = score;
        
        // Next task
        currentTask++;
        if (currentTask >= tasks.length) {
            currentTask = 0;
            level++;
            document.getElementById('level').textContent = level;
        }
        
        document.getElementById('task').textContent = tasks[currentTask].text;
        editor.innerHTML = '';
        alert('✅ To\'g\'ri!');
    } else {
        alert('❌ Noto\'g\'ri. Qayta urinib ko\'ring!');
    }
}

// Quit game
function quitGame() {
    endGame();
}

// End game
function endGame() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    saveGameScore('word', score, level, timeSpent);
    
    alert(`🎮 O'yin tugadi!\n\nJami Ball: ${score}\nDaraja: ${level}\nVaqt: ${timeSpent}s`);
    window.location.href = 'index.html';
}