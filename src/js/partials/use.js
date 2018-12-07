//Some JS
const App = (function () {
   "use strict";
   // const reviewsSlider = $("#js_reviews");
   const DOC = $(document);
   return {
      showComment: function () {
         DOC.on("click", ".js_show-more", function () {
            const _this = $(this);
            const comment = _this.siblings(".text-over");
            comment.toggleClass("text-over--full");
         });
      },
      init: function () {
         App.showComment();
      }
   };
})();