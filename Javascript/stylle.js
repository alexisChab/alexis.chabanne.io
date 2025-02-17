// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const scrollElements = document.querySelectorAll(".scroll-animate");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
// Ajoutez ce code à votre fichier JavaScript existant ou créez un nouveau fichier

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.toggle-details');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var details = this.nextElementSibling;
            if (details.classList.contains('expanded')) {
                details.classList.remove('expanded');
                this.textContent = 'Voir projet';
            } else {
                details.classList.add('expanded');
                this.textContent = 'Masquer le projet';
            }
        });
    });

    // Animation de défilement
    var sections = document.querySelectorAll('.scroll-animate');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pour les détails des projets
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', () => {
      const details = document.querySelector(button.getAttribute('href'));
      details.classList.toggle('expanded');
    });
  });
  // script.js

document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            const skillName = this.getAttribute('data-skill');
            const skillElement = document.getElementById(skillName);

            if (skillElement) {
                skillElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = `competence.php#${skillName}`;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("message-container").style.display = "none";
});

