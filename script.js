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
    // انتخاب تمام گزینه‌ها با کلاس .option
    const options = document.querySelectorAll('.option');

    // افزودن event listener به هر گزینه
    options.forEach(option => {
        option.addEventListener('click', function(event) {
            // جلوگیری از بروز مشکلات احتمالی
            event.stopPropagation();
            
            // حذف کلاس dim از تمام گزینه‌ها
            options.forEach(opt => opt.classList.remove('dim'));
            
            // اضافه کردن کلاس dim به گزینه کلیک شده برای کاهش روشنایی
            this.classList.add('dim');
        });
    });
});

// جلوگیری از راست‌کلیک
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
