// // JavaScript code
// function animateValue(id, start, end, duration) {
//   let current = start;
//   const range = end - start;
//   const increment = end > start ? 1 : -1;
//   const stepTime = Math.abs(Math.floor(duration / range));
//   const element = document.getElementById(id);
//   const timer = setInterval(() => {
//     current += increment;
//     element.textContent = "+" + current;
//     if (current === end) {
//       clearInterval(timer);
//     }
//   }, stepTime);
// }




// animateValue("count1", 0, 700, 2500);
// animateValue("count2", 0, 15, 3000);
// animateValue("count3", 0, 45, 2500);
// animateValue("count4", 7000, 8000, 2000);




(function ($, Drupal) {
  Drupal.behaviors.animateCounter = {
    attach: function (context, settings) {
      function animateValue(id, start, end, duration) {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const element = document.getElementById(id);
        const timer = setInterval(() => {
          current += increment;
          element.textContent = "+" + current;
          if (current === end) {
            clearInterval(timer);
          }
        }, stepTime);
      }

      animateValue("count1", 0, 700, 2500);
      animateValue("count2", 0, 15, 3000);
      animateValue("count3", 0, 45, 2500);
      animateValue("count4", 7000, 8000, 2000);
    }
  };
})(jQuery, Drupal);
