document.addEventListener('DOMContentLoaded', function () {
    var filterLinks = document.querySelectorAll('.filter-link');
    var projects = document.querySelectorAll('.project');

    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var category = this.getAttribute('data-category');

            // Filtrer les projets
            projects.forEach(function (project) {
                var projectCategory = project.getAttribute('data-category');

                if (category === 'all' || projectCategory === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });

            // Mettre à jour l'état actif du lien
            filterLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            // Ajuster la hauteur du projet visible
            var visibleProject = document.querySelector('.project[style*="display: block;"]');
            if (visibleProject) {
                visibleProject.style.height = 'auto'; // Réinitialise la hauteur
                var projectHeight = visibleProject.scrollHeight + 'px';
                visibleProject.style.height = projectHeight; // Ajuste la hauteur en fonction du contenu
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var filterLinks = document.querySelectorAll('.filter-link');
    var skills = document.querySelectorAll('.skill');

    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var category = this.getAttribute('data-category');

            // Filtrer les compétences
            skills.forEach(function (skill) {
                var skillCategory = skill.getAttribute('data-category');

                if (category === 'all' || skillCategory === category) {
                    skill.style.display = 'block';
                } else {
                    skill.style.display = 'none';
                }
            });

            // Mettre à jour l'état actif du lien
            filterLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var filterLinks = document.querySelectorAll('.filter-link');
    var skills = document.querySelectorAll('.skill');
    var subMenu = document.getElementById("sub-menu");

    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var category = this.getAttribute('data-category');

            // Vérifie si on a cliqué sur "Langage" ou "Framework"
            if (category === "langage" || category === "framework") {
                subMenu.style.display = "flex"; // Afficher le sous-menu
                filterSubCategory("all"); // Afficher toutes les sous-catégories par défaut
            } else {
                subMenu.style.display = "none"; // Cacher le sous-menu
            }

            // Filtrer les compétences principales
            skills.forEach(function (skill) {
                var skillCategory = skill.getAttribute('data-category').split(" ");

                if (category === 'all' || skillCategory.includes(category)) {
                    skill.style.display = 'block';
                } else {
                    skill.style.display = 'none';
                }
            });

            // Mettre à jour l'état actif du menu
            filterLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// Fonction pour filtrer les sous-catégories de Langage et Framework
function filterSubCategory(subCategory) {
    let skills = document.querySelectorAll('.skill[data-category="langage"], .skill[data-category="framework"]');

    skills.forEach(skill => {
        let skillCategories = skill.getAttribute('data-sub-category').split(" ");

        if (subCategory === "all" || skillCategories.includes(subCategory)) {
            skill.style.display = "block";
        } else {
            skill.style.display = "none";
        }
    });
}




