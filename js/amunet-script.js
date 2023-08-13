/**
 * @file
 * This file is to add any custom js for amunet theme.
 */
((Drupal, once) => {
  'use strict';

  const header = document.getElementById("header");
  const sticky = header.offsetTop;

  window.onscroll = () => {
    header.classList.toggle("w3-sticky", window.pageYOffset > sticky);
  }


  Drupal.behaviors.amunetThemeBehavior = {
    attach: function (context, settings) {

      const searchBlock = document.getElementById('search-slide');
      const openNav = document.querySelector('.open-nav-inner');
      const openSearch = document.querySelector('.open-search');
      const closeSearch = document.querySelector('.close-search');

      const closeSearchHandler = () => {
        searchBlock.style.height = "0px";
        searchBlock.addEventListener('transitionend', removeActiveClass, {once: true});
      }

      const removeActiveClass = () => {
        searchBlock.classList.remove('show');
      }

      const openSearchHandler = () => {
        document.getElementById('main-navigation-v').style.display = 'none';
        searchBlock.classList.add('show');
        searchBlock.style.height = "auto";
        let height = searchBlock.clientHeight + "px";
        searchBlock.style.height = "0px";
        setTimeout(() => {
          searchBlock.style.height = height;
        }, 0);
      }

      closeSearch?.addEventListener('click', closeSearchHandler);
      openSearch?.addEventListener('click', openSearchHandler);
      openNav?.addEventListener('click', closeSearchHandler);


    }
  };


})(Drupal, once);

