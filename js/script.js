/**
 * @file
 * This file is to add any custom js for the drupal8 w3css subtheme.
 */

(function ($, Drupal) {

  'use strict';
      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function scrollWindow() {
       if (window.pageYOffset > sticky) {
         header.classList.add("w3-sticky");
       }
else {
         header.classList.remove("w3-sticky");
       }
     }

  Drupal.behaviors.customBehavior = {
    attach: function (context, settings) {

      $(context)
            .find('.close-search')
            .once('.close-search')
      .on(
          'click', function () {
                  document.getElementById('search-slide').style.display = 'none';
                }
            );
      $(context)
            .find('.open-search')
            .once('.open-search')
             .on(
                'click', function () {
                  document.getElementById('search-slide').style.display = 'block';
                  document.getElementById('main-navigation-v').style.display = 'none';
                }
            );
      $(context)
            .find('.open-nav-inner')
            .once('.open-nav-inner')
            .on(
                'click', function () {
                  document.getElementById('search-slide').style.display = 'none';
                }
            );
    window.addEventListener('scroll', scrollWindow);

    }
  };
})(jQuery, Drupal);
