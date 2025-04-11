document.querySelector('.hamburger').addEventListener('click', event => {
    document.querySelector('.menu').classList.toggle('show');
});

const navigationLinks = document.querySelectorAll('a[href^="#"]');
navigationLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetedSection = link.getAttribute('href');
        highlightLink(targetedSection);
    });
});

function highlightLink(targetedSection) {
    navigationLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        if (sectionId===targetedSection || (targetedSection==="#" && sectionId==="#header")) {
            console.log(sectionId, targetedSection)
            link.classList.add('highlight');
        } else {
            link.classList.remove('highlight');
        }
    });
};