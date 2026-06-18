// Rotating hero words
const rotatingWord = document.getElementById('rotating-word');
const words = rotatingWord.dataset.words.split(',');
let currentIndex = 0;

setInterval(() => {

  // Step 1: fade out
  rotatingWord.classList.add('is-hidden');

  // Step 2: after fade completes, swap the word and fade back in
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    rotatingWord.textContent = words[currentIndex];
    rotatingWord.classList.remove('is-hidden');
  }, 300); // matches the CSS transition duration exactly

}, 2800); // how long each word stays visible — adjust freely

// Service Tabs 

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.service;

    // 1. Reset every tab and panel
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach((p) => p.classList.remove('is-active'));

    // 2. Activate the clicked tab and its matching panel
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    document
      .querySelector(`.panel[data-service="${target}"]`)
      .classList.add('is-active');
  });
});

// Mobile nav toggle

const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');

if (nav && hamburger) {
  hamburger.addEventListener('click', () => {
    // Flip the menu open/closed
    const isOpen = nav.classList.toggle('is-open');

    // Tell readers the current state
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close the menu after tapping a link 
  nav.querySelectorAll('.nav__menu-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}