/**
 * @file
 * This file is to add any custom js for amunet theme.
 */
(function ($, Drupal, once) {
  'use strict';
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function scrollWindow() {
    if (window.pageYOffset > sticky) {
      header.classList.add("w3-sticky");
    } else {
      header.classList.remove("w3-sticky");
    }
  }
  Drupal.behaviors.amunetThemeBehavior = {
    attach: function (context, settings) {
      $(once('body', '.close-search', context)).on('click', function () {
        document.getElementById('search-slide').style.display = 'none';
      });
      $(once('body', '.open-search', context)).on('click', function () {
        document.getElementById('search-slide').style.display = 'block';
        document.getElementById('main-navigation-v').style.display = 'none';
      });
      $(once('body', '.open-nav-inner', context)).on('click', function () {
        document.getElementById('search-slide').style.display = 'none';
      });
      window.addEventListener('scroll', scrollWindow);
    }
  };
})(jQuery, Drupal, once);
