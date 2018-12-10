const App = (function () {
   "use strict";
   const DOC = $(document);
   return {
      showComment: function () {
         DOC.on("click", ".js_show-more", function () {
            const _this = $(this);
            const comment = _this.siblings(".text-over");
            comment.toggleClass("text-over--full");
         });
      },
      scrollToTarget: function (scrollSelector, speed) {
         const links = $(scrollSelector);
         links.click(function (e) {
            e.preventDefault();
            const _this = $(this);
            const href = _this.attr('href');
            if (href.length <= 1) {
               return;
            }
            const target = $(href);
            if (!target.length) {
               return;
            }
            const top = target.offset().top;
            $('html, body').animate({
               scrollTop: top
            }, speed);
         });
      },
      showTabs: function () {
         const tabs = $('.js-tabs');
         const comment = $('.comment');
         tabs.click(function (e) {
            const _this = $(this);
            tabs.removeClass('name--active');
            _this.addClass('name--active');
            const href = _this.data('target');
            const target = $(href);
            comment.removeClass('comment--active');
            target.addClass('comment--active');
         });
      },
      init: function () {
         App.showComment();
         App.scrollToTarget('.js-scroll', 700);
         App.showTabs();

      }
   };
})();