// توکن ربات تلگرام
const token = "7424010979:AAGlORc0sDcT8irk4eQHfftQvaoD5CcgwR0";

// تابع برای دریافت اطلاعات کاربر
async function getUserIdFromTelegram() {
    const url = `https://api.telegram.org/bot${token}/getUpdates`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
        const updates = data.result;
        if (updates.length > 0) {
            const userId = updates[updates.length - 1].message.from.id;
            document.getElementById("telegramId").innerText = `Telegram ID: ${userId}`;
        }
    } else {
        console.error("Error fetching user ID:", data.description);
    }
}

// وقتی محتوای صفحه به‌طور کامل لود شد
document.addEventListener('DOMContentLoaded', function() {
    getUserIdFromTelegram();

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
