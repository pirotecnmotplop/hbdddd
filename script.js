const TOTAL_CORACOES = 40;

for (let i = 0; i < TOTAL_CORACOES; i++) {
  const c = document.createElement('div');
  c.classList.add('coracao');

  const emojis = ['🤧', '💚'];
  c.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  c.style.left = Math.random() * 100 + 'vw';
  c.style.fontSize = (Math.random() * 16 + 14) + 'px';
  c.style.animationDuration = (Math.random() * 7 + 7) + 's';
  c.style.animationDelay = Math.random() * 6 + 's';
  c.style.opacity = Math.random() * 0.45 + 0.35;
  c.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  const tons = [
    'rgba(185, 130, 235, 0.7)',
    'rgba(165, 110, 215, 0.7)',
    'rgba(205, 150, 245, 0.7)'
  ];
  c.style.color = tons[Math.floor(Math.random() * tons.length)];

  document.body.appendChild(c);
}
