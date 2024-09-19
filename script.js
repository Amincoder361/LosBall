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
    showSection('playSection');
});

// افزودن کلیک به گزینه‌های پایین صفحه
document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
        const sectionId = option.querySelector('img').alt + 'Section';
        showSection(sectionId);
    });
});

// تولید آیدی رندوم
function generateRandomId() {
    const randomId = 'ID-' + Math.floor(Math.random() * 10000);
    document.getElementById('randomId').textContent = randomId;
}

// فراخوانی تابع تولید آیدی رندوم
generateRandomId();
