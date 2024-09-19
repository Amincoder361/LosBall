// تابع برای تولید آیدی رندوم
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

// وقتی محتوای صفحه به‌طور کامل لود شد
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    const playOption = options[2]; // گزینه "Play"
    const tasksOption = options[0]; // گزینه "Tasks"
    const dailyOption = options[1]; // گزینه "Daily"
    const friendsOption = options[3]; // گزینه "Friends"
    const walletOption = options[4]; // گزینه "Wallet"

    const playSection = document.getElementById('playSection');
    const tasksSection = document.getElementById('tasksSection');
    const dailySection = document.getElementById('dailySection');
    const friendsSection = document.getElementById('friendsSection');
    const walletSection = document.getElementById('walletSection');

    // تابع برای پنهان کردن تمام بخش‌ها
    function hideAllSections() {
        playSection.style.display = 'none';
        tasksSection.style.display = 'none';
        dailySection.style.display = 'none';
        friendsSection.style.display = 'none';
        walletSection.style.display = 'none';
    }

    options.forEach(option => {
        option.addEventListener('click', function(event) {
            event.stopPropagation();
            options.forEach(opt => opt.classList.remove('dim'));
            this.classList.add('dim');

            // مخفی کردن تمام بخش‌ها و نمایش بخش مربوط به گزینه انتخاب شده
            hideAllSections();
            if (this === playOption) {
                playSection.style.display = 'block';
            } else if (this === tasksOption) {
                tasksSection.style.display = 'block';
            } else if (this === dailyOption) {
                dailySection.style.display = 'block';
            } else if (this === friendsOption) {
                friendsSection.style.display = 'block';
            } else if (this === walletOption) {
                walletSection.style.display = 'block';
            }
        });
    });

    // نمایش صفحه Play به‌طور پیش‌فرض و انتخاب گزینه Play
    playOption.click();
});

// جلوگیری از راست‌کلیک
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
