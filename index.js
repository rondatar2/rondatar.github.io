const container = document.querySelector('.container');
const loader = document.querySelector('.loader-container');
const togglebtn = document.querySelector('#check');
const navbarlist = document.querySelector('#nav-list');
const navbarmode = document.querySelector('#nav-mode');
const light_dark_toggle = document.querySelector('.light-dark-toggle');
const light_dark_toggle_id = document.querySelector('#light-dark-toggle-id');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const reveals = document.querySelectorAll('.reveal')
const reveals2 = document.querySelectorAll('.reveal2')
const reveals3 = document.querySelectorAll('.reveal3')
const moretoggle = document.querySelector('.more-toggle')
const projhide = document.querySelectorAll('.proj-hide')
const email = document.getElementById('email')
const name = document.getElementById('name')
const message = document.getElementById('messagetext')
const toTop = document.querySelector('.to-top');

body.onload = () => {
    setTimeout(() => {
        loader.style.display = 'none';
    }, 4500);
    setTimeout(() => {
        container.style.display = 'block';
    }, 5000);
}
window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
})
window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals2.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals2[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals2[i].classList.add("active");
        }
        else {
            reveals2[i].classList.remove("active");
        }
    }
})
window.addEventListener('scroll', () => {
    for (let i = 0; i < reveals3.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals3[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals3[i].classList.add("active");
        }
        else {
            reveals3[i].classList.remove("active");
        }
    }
})

togglebtn.addEventListener('click', () => {
    if (togglebtn.checked) {
        navbarlist.style.display = 'flex';
        navbarmode.style.display = 'flex';
    }
    else {
        navbarlist.style.display = 'none';
        navbarmode.style.display = 'none';
    }
})
light_dark_toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        logo.src = './img/logo-dark.png'
        light_dark_toggle_id.className = 'light-dark-toggle fa-solid fa-sun fa-xl'
    }
    else {
        logo.src = './img/logo-light.png'
        light_dark_toggle_id.className = 'light-dark-toggle fa-solid fa-moon fa-xl'
    }
})
moretoggle.addEventListener('click', () => {
    for (let i = 0; i < projhide.length; i++) {
        if (projhide[i].style.display === 'none') {
            projhide[i].style.display = 'flex';
            moretoggle.textContent = 'View less'
        }
        else {
            projhide[i].style.display = 'none';
            moretoggle.textContent = 'View more'
        }
    }
})
const sendEmail = () => {
    Email.send({
        SecureToken: 'ec44b9f9-e2a0-438a-aaa1-e37e20ac473f',
        To: 'rondatar1@gmail.com',
        From: 'rondatar3@gmail.com',
        Subject: "New Contact Form Enquiry",
        Body: `Name: ${name.value} <br> Email: ${email.value} <br> Message: ${message.value}`
    }).then(
        message => alert('Message Sent Successfully')
    );
}
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active")
    }
    else {
        toTop.classList.remove("active")
    }
})