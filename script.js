// ===== Theme Toggle with localStorage =====
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme'); // اقرأ آخر اختيار محفوظ
  if(saved === 'light'){ root.classList.add('light'); }

  // تبديل الثيم عند الضغط على الزر الظاهر في النافبار
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id === 'themeToggle'){
      root.classList.toggle('light'); // يضيف/يحذف .light على <html>
      localStorage.setItem('theme',
        root.classList.contains('light') ? 'light' : 'dark');
      // تغيير الأيقونة
      e.target.textContent = root.classList.contains('light') ? '🌙' : '☀️';
    }
  });

  // ضبط الأيقونة عند تحميل الصفحة
  const tbtn = document.getElementById('themeToggle');
  if(tbtn){ tbtn.textContent = root.classList.contains('light') ? '🌙' : '☀️'; }
})();

// ===== Mobile Menu =====
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if(toggle && menu){
  toggle.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// ===== Back to Top Button =====
const topBtn = document.querySelector('.backtotop');
if(topBtn){
  window.addEventListener('scroll', ()=>{
    (window.scrollY > 400) ? topBtn.classList.add('show') : topBtn.classList.remove('show');
  });
}

// ===== Scroll Reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.classList.add('show');
      io.unobserve(en.target);
    }
  });
},{ threshold: 0.12 });
revealEls.forEach(el=> io.observe(el));