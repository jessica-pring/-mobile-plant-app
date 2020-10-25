const navActive = () => {
  const navContainer = document.querySelector('.navbar-collapse');
  const btns = navContainer.querySelector('.nav-item');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      const current = document.querySelector('.active');
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

export default navActive;

// put your mapping here
// var mapping = {
//   "http://localhost:3000/": "css.path.to.your.element",
//   "http://localhost:3000/plants": "path.to.other.element",
// }

// $(function () {
//   $(mapping[window.location.href]).addClass('active');
// });
