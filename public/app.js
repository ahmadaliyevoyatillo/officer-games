// ===== Page Navigation =====
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const pageName = btn.getAttribute('data-page');
        
        // Remove active class from all buttons and pages
        navButtons.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding page
        btn.classList.add('active');
        document.getElementById(pageName).classList.add('active');
        
        // Load leaderboard if clicked
        if (pageName === 'leaderboard') {
            loadLeaderboard();
        }
        
        // Load profile if clicked
        if (pageName === 'profile') {
            loadProfile();
        }
    });
});

// ===== Load Leaderboard =====
async function loadLeaderboard() {
    try {
        const response = await fetch('/api/users/leaderboard');
        const users = await response.json();
        
        const tbody = document.getElementById('leaderboardBody');
        tbody.innerHTML = '';
        
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td><strong>${user.totalScore}</strong></td>
                <td>${user.wordGameScore || 0}</td>
                <td>${user.excelGameScore || 0}</td>
                <td>${user.powerpointGameScore || 0}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (err) {
        console.error('Leaderboard yuklashda xatolik:', err);
    }
}

// ===== Load Profile =====
async function loadProfile() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        document.getElementById('profileContent').innerHTML = '<p>Kirish kerak!</p>';
        return;
    }
    
    try {
        const response = await fetch(`/api/users/profile/${userId}`);
        const user = await response.json();
        
        document.getElementById('profileContent').innerHTML = `
            <p><strong>Foydalanuvchi:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Jami Ball:</strong> ${user.totalScore}</p>
            <p><strong>Word Ball:</strong> ${user.wordGameScore || 0}</p>
            <p><strong>Excel Ball:</strong> ${user.excelGameScore || 0}</p>
            <p><strong>PowerPoint Ball:</strong> ${user.powerpointGameScore || 0}</p>
        `;
    } catch (err) {
        console.error('Profil yuklashda xatolik:', err);
    }
}

// ===== Authentication =====
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = prompt('Email kiriting:');
    const password = prompt('Parol kiriting:');
    
    if (email && password) {
        login(email, password);
    }
});

document.getElementById('registerBtn').addEventListener('click', () => {
    const username = prompt('Foydalanuvchi nomi kiriting:');
    const email = prompt('Email kiriting:');
    const password = prompt('Parol kiriting:');
    
    if (username && email && password) {
        register(username, email, password);
    }
});

async function login(email, password) {
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('username', data.user.username);
            alert('✅ ' + data.message);
            location.reload();
        } else {
            alert('❌ ' + data.message);
        }
    } catch (err) {
        alert('Xatolik yuz berdi: ' + err.message);
    }
}

async function register(username, email, password) {
    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user.id);
            localStorage.setItem('username', data.user.username);
            alert('✅ ' + data.message);
            location.reload();
        } else {
            alert('❌ ' + data.message);
        }
    } catch (err) {
        alert('Xatolik yuz berdi: ' + err.message);
    }
}

// ===== Start Game =====
function startGame(gameType) {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
        alert('Avval kirish kerak!');
        return;
    }
    
    if (gameType === 'word') {
        window.location.href = '/word-game.html';
    } else if (gameType === 'excel') {
        window.location.href = '/excel-game.html';
    } else if (gameType === 'powerpoint') {
        window.location.href = '/powerpoint-game.html';
    }
}

// ===== Save Game Score =====
async function saveGameScore(gameType, score, level, timeSpent) {
    const userId = localStorage.getItem('userId');
    
    try {
        const response = await fetch('/api/games/save-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId,
                gameType,
                score,
                level,
                timeSpent
            })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('✅ Ball saqlandi: ' + data.totalScore);
        }
    } catch (err) {
        console.error('Ball saqlashda xatolik:', err);
    }
}

// ===== Load initial leaderboard on home =====
window.addEventListener('load', () => {
    loadLeaderboard();
});