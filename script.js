// جلوگیری از راست‌کلیک روی کل صفحه
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// توابع برای نمایش و پنهان کردن بخش‌ها
function showSection(sectionId) {
    // پنهان کردن همه بخش‌ها
    document.getElementById('playSection').style.display = 'none';
    document.getElementById('tasksSection').style.display = 'none';
    document.getElementById('dailySection').style.display = 'none';
    document.getElementById('friendsSection').style.display = 'none';
    document.getElementById('walletSection').style.display = 'none';

    // نمایش بخش انتخاب‌شده
    document.getElementById(sectionId).style.display = 'flex';

    // تغییر استایل گزینه‌ها
    document.querySelectorAll('.option').forEach(function(option) {
        option.classList.add('dim');
    });
    document.querySelector(`.option img[alt="${sectionId.replace('Section', '')}"]`).parentElement.classList.remove('dim');
}

// نمایش دیفالت بخش Play
document.addEventListener('DOMContentLoaded', function() {
    showSection('playSection'); // بخش Play به صورت دیفالت نمایش داده می‌شود
});

// افزودن کلیک به گزینه‌های پایین صفحه
document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
        const sectionId = option.querySelector('img').alt + 'Section'; // استخراج ID بخش
        showSection(sectionId); // نمایش بخش انتخاب‌شده
    });
});

// تولید آیدی رندوم
function generateRandomId() {
    const prefix = "MrFooty_";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 5; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix + randomString;
}

// بررسی اینکه آیا آیدی قبلاً در localStorage ذخیره شده است یا نه
let randomId = localStorage.getItem('userId');

if (!randomId) {
    // اگر آیدی وجود ندارد، یک آیدی جدید تولید کرده و ذخیره می‌کند
    randomId = generateRandomId();
    localStorage.setItem('userId', randomId);
}

// نمایش آیدی در بالای سمت چپ
document.getElementById("randomId").innerText = randomId;
