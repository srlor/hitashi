let currentIndex = 0;
let vantaEffect;

function nextCard() {
    const cards = document.querySelectorAll('.card');
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
}

window.onload = function () {
    // إعداد تأثير VANTA.NET
    vantaEffect = VANTA.NET({
        el: "#background",
        color: 0x1e90ff, // لون الشبكة
        backgroundColor: 0x0a0a0a, // لون الخلفية
        points: 20.0, // عدد النقاط (زيادة تعطي تأثيرًا أكثر حيوية)
        maxDistance: 20.0, // المسافة القصوى بين النقاط
        spacing: 15.0, // تباعد الشبكة
        speed: 10.0, // تسريع الحركة
    });

    // إضافة تأثير ضوء نابض
    setInterval(() => {
        const randomColor = Math.random() * 0xffffff; // لون عشوائي
        vantaEffect.setOptions({
            color: randomColor,
        });
    }, 3000); // تكرار كل 3 ثوانٍ

    // إضافة فاكهة جديدة (نقاط إضافية)
    setInterval(() => {
        vantaEffect.setOptions({
            points: vantaEffect.options.points + 1, // زيادة عدد النقاط
        });
    }, 10000); // تحديث النقاط كل 5 ثوانٍ
};

window.onunload = function () {
    if (vantaEffect) vantaEffect.destroy();
};
