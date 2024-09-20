// وقتی محتوای صفحه به‌طور کامل لود شد
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const telegramId = urlParams.get('userId');

    // نمایش آیدی تلگرام کاربر
    if (telegramId) {
        document.getElementById("telegramId").innerText = `Telegram ID: ${telegramId}`;
    } else {
        document.getElementById("telegramId").innerText = "Telegram ID not found.";
    }

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

    // جلوگیری از راست‌کلیک
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});
