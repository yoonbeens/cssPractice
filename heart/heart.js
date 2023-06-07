// $(function() {
//     $(".heart").on("click", function() {
//       $(this).toggleClass("is-active");
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
  let heartElements = document.querySelectorAll(".heart");
  
  for (let i = 0; i < heartElements.length; i++) {
    heartElements[i].addEventListener("click", function() {
      this.classList.toggle("is-active");
    });
  }
});