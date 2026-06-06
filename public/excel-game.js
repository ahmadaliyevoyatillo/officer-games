let timeLeft = 60;
let score = 0;
let level = 1;
let startTime = Date.now();

const excelTasks = [
    { task: 'C1 katakga A1 + B1 (10+20) natijasini kiriting', cell: 'C1', answer: '30' },
    { task: 'C2 katakga A2 + B2 (5+15) natijasini kiriting', cell: 'C2', answer: '20' },
    { task: 'D1 katakga A1 * B1 (10*20) natijasini kiriting', cell: 'D1', answer: '200' }
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

function checkExcelAnswer() {
    const task = excelTasks[currentTask];
    const cell = document.getElementById(task.cell);
    const value = cell.innerText.trim();
    
    if (value === task.answer) {
        score += 10 * level;
        document.getElementById('score').textContent = score;
        
        currentTask++;
        if (currentTask >= excelTasks.length) {
            currentTask = 0;
            level++;
            document.getElementById('level').textContent = level;
        }
        
        document.getElementById('task').textContent = excelTasks[currentTask].task;
        
        // Clear current cell
        document.getElementById(excelTasks[currentTask].cell).innerText = '';
        
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
    
    saveGameScore('excel', score, level, timeSpent);
    
    alert(`🎮 O'yin tugadi!\n\nJami Ball: ${score}\nDaraja: ${level}\nVaqt: ${timeSpent}s`);
    window.location.href = 'index.html';
}