document.querySelector('.hamburger').addEventListener('click', function () {
  this.firstElementChild.classList.toggle('active');
  document.querySelector('.rightSide').classList.toggle('open');
});
