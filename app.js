document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('register').addEventListener('submit', function(e) {
  e.preventDefault();
  const notice = document.getElementById('notice');
  notice.textContent = 'Thanks. This demo form does not send or store personal information yet. Connect a secure backend before accepting registrations.';
  this.reset();
});
