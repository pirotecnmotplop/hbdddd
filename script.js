  
  for (let i = 0; i < 26; i++) {

      const c = document.createElement('div');
      c.classList.add('coracao');
      c.style.position = 'fixed';
      c.innerHTML = '❤️';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.animationDuration = (Math.random() * 6 + 6) + 's';
      c.style.animationDelay = Math.random() * 5 + 's';
      c.style.fontSize = (Math.random() * 12 + 16) + 'px';
      document.body.appendChild(c);
    }
