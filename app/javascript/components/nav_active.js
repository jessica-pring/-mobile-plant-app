// const navActive = () => {
//   const navContainer = document.querySelector('.navbar-collapse');
//   const btns = navContainer.querySelector('.nav-item');

//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", () => {
//       const current = document.querySelector('.active');
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// }


// put your mapping here
var mapping = {
  "http://localhost:3000/": "#home",
  "http://localhost:3000/plants": "#plants",
}

$(function navActive() {
  $(mapping[window.location.href]).addClass('active');
});

export default navActive();
