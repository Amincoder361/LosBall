const token = "7424010979:AAGlORc0sDcT8irk4eQHfftQvaoD5CcgwR0"; // توکن ربات شما
const apiUrl = `https://api.telegram.org/bot${token}/getUpdates`;

// دریافت آیدی کاربر
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.ok && data.result.length > 0) {
            const userId = data.result[0].message.from.id; // دریافت آیدی کاربر
            document.getElementById("randomId").innerText = userId; // نمایش آیدی
        } else {
            console.error("No updates found.");
        }
    })
    .catch(error => console.error("Error fetching updates:", error));

// وقتی محتوای صفحه به‌طور کامل لود شد
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    const playOption = options[2]; // گزینه "Play"
    const tasksOption = options[0]; // گزینه "Tasks"

    const playSection = document.getElementById('playSection');
    const tasksSection = document.getElementById('tasksSection');

    // تابع برای پنهان کردن تمام بخش‌ها
    function hideAllSections() {
        playSection.style.display = 'none';
        tasksSection.style.display = 'none';
    }

    options.forEach(option => {
        option.addEventListener('click', function(event) {
            event.stopPropagation();
            hideAllSections();
            if (this === playOption) {
                playSection.style.display = 'block';
            } else if (this === tasksOption) {
                tasksSection.style.display = 'block';
            }
        });
    });

    // نمایش صفحه Play به‌طور پیش‌فرض
    playOption.click();
});

// جلوگیری از راست‌کلیک
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
