# 🎮 Officer Games - O'yin Platformasi

Ushbu loyiha **Word, Excel va PowerPoint** o'yinlarini birlashtirgan interaktiv web platformasi. Foydalanuvchilar o'yinlarni o'ynab o'z ko'nikmalarini takomillashtirishlari va balllar to'plashlari mumkin.

## 🚀 Xususiyatlari

✅ **Uchta O'yin:**
- 📝 **Word O'yini** - Matnni formatlash va tahrir qilish
- 📊 **Excel O'yini** - Jadvallar va formulalar bilan ishlash
- 🎨 **PowerPoint O'yini** - Slayd dizayni va animatsiyalar

✅ **Foydalanuvchi Tizimi:**
- Ro'yxatdan o'tish va kirish
- Profil boshqaruvi
- Ball va darajani kuzatish

✅ **Leaderboard:**
- Eng yuqori balllarni ko'rish
- O'yinlar bo'yicha reyting

## 📋 Texnologiyalar

**Backend:**
- Node.js + Express.js
- MongoDB (Database)
- JWT Authentication
- bcryptjs (Password hashing)

**Frontend:**
- HTML5
- CSS3 (Responsive Design)
- Vanilla JavaScript
- Office-themed UI

## 📦 O'rnatish

### 1. Repozitoriyani klonlang:
```bash
git clone https://github.com/ahmadaliyevoyatillo/officer-games.git
cd officer-games
```

### 2. Npm paketlarini o'rnatish:
```bash
npm install
```

### 3. Environment variables'ni sozlang:
```bash
# .env faylini yarating
cp .env.example .env

# Quyidagi ma'lumotlarni to'ldiring:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/officer-games
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### 4. MongoDB'ni boshlang:
```bash
# MongoDB serverni ishlating
mongod
```

### 5. Serverni ishga tushiring:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 6. Brauzerni oching:
```
http://localhost:5000
```

## 📁 Loyiha Struktura

```
officer-games/
├── server/
│   ├── app.js              # Express main app
│   ├── models/             # Database models
│   │   ├── User.js
│   │   └── GameScore.js
│   └── routes/             # API routes
│       ├── users.js
│       ├── games.js
│       └── scores.js
├── public/                 # Frontend files
│   ├── index.html          # Main page
│   ├── styles.css          # Main styles
│   ├── app.js              # Main app logic
│   ├── word-game.html      # Word game
│   ├── word-game.js
│   ├── excel-game.html     # Excel game
│   ├── excel-game.js
│   ├── powerpoint-game.html # PowerPoint game
│   ├── powerpoint-game.js
│   ├── game-styles.css     # Game styles
│── package.json
├── .env.example
└── README.md
```

## 🎮 O'yin Qoidalari

### 📝 Word O'yini
- Matnni ko'rsatilgan formatda (Bold, Italic, Underline) yozing
- Har bir to'g'ri javob uchun ball qo'shiladi
- Vaqt tugagach o'yin tugaydi

### 📊 Excel O'yini
- Kataklarga raqamlar va formulalar kiriting
- Matematik hisoblashlarni bajarang
- Doston tezlikda bajarilgan vazifalar ko'proq ball beradi

### 🎨 PowerPoint O'yini
- Slaydning rangini o'zgartiring
- Sarlavhani tahrir qiling
- Animatsiyalarni qo'llang

## 📊 API Endpoints

### Foydalanuvchi Endpoints
- `POST /api/users/register` - Ro'yxatdan o'tish
- `POST /api/users/login` - Kirish
- `GET /api/users/profile/:id` - Profil ma'lumotlari
- `GET /api/users/leaderboard` - Reytingi

### O'yin Endpoints
- `POST /api/games/save-score` - Ballni saqlash
- `GET /api/games/history/:userId/:gameType` - O'yin tarixi

### Reyting Endpoints
- `GET /api/scores/top/:gameType` - Eng yuqori balllar

## 🛡️ Xavfsizlik

- Parollar bcryptjs bilan shifrlangan
- JWT tokenlar ishlatiladi
- CORS protokoli sozlangan
- Inputlar tekshiriladi

## 🤝 Hissa Qo'shish

Agar sizda yangi g'oyalar yoki tuzatishlar bo'lsa:

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. Commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📝 Litsenziya

MIT License - Batafsil ma'lumot uchun LICENSE faylni qarang

## 👨‍💻 Muallif

**Ahmadaliyev Oyatillo**
- GitHub: [@ahmadaliyevoyatillo](https://github.com/ahmadaliyevoyatillo)

## 💬 Aloqa

Savollar yoki takliflar uchun issue oching yoki [email](mailto:your-email@example.com) orqali muloqot qiling.

---

**Officer Games** bilan o'ynashni istammang! 🎮✨
