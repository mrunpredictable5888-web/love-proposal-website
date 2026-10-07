const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseBox = document.getElementById('responseBox');

yesBtn.addEventListener('click', () => {
  responseBox.classList.remove('hidden');
  responseBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseenter', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 40;
  const maxY = window.innerHeight - noBtn.offsetHeight - 120;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener('click', () => {
  noBtn.textContent = 'You can still say yes 😄';
  noBtn.disabled = true;
  noBtn.style.opacity = '0.7';
});
