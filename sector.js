document.getElementById("year").textContent = new Date().getFullYear();
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
