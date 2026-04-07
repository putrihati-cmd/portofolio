// script.js

// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Contact Form Handling with Validation
const contactForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorMessage = document.querySelector('.error-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value === '' || messageInput.value === '') {
        errorMessage.textContent = 'All fields are required!';
    } else {
        errorMessage.textContent = '';
        // Handle form submission, e.g., send data to a server
    }
});

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach(elem => observer.observe(elem));

// Typing Animation for Hero Title
const title = document.querySelector('.hero-title');
const typedText = 'Welcome to My Portfolio!';
let index = 0;

function type() {
    if (index < typedText.length) {
        title.textContent += typedText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.onload = type;

// Scroll to Top Button Functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});