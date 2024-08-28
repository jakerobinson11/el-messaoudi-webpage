//Switch between French and English//

function switchLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'fr') {
        document.documentElement.lang = 'en';
        document.querySelector('.navbar a:nth-child(1)').textContent = 'Home';
        document.querySelector('.navbar a:nth-child(2)').textContent = 'About';
        document.querySelector('.navbar a:nth-child(3)').textContent = 'Services';
        document.querySelector('.navbar a:nth-child(4)').textContent = 'Testimonials';
        document.querySelector('.navbar a:nth-child(5)').textContent = 'Contact';
        document.querySelector('.content h1').textContent = 'Welcome to Your Private Psychologist';
        document.querySelector('.content p').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus vel leo dignissim efficitur. Mauris auctor, odio at malesuada fringilla, purus arcu feugiat nisi, non dapibus libero odio id eros.';
        document.querySelector('.language-switch button').textContent = 'Français';
    } else {
        document.documentElement.lang = 'fr';
        document.querySelector('.navbar a:nth-child(1)').textContent = 'Accueil';
        document.querySelector('.navbar a:nth-child(2)').textContent = 'À propos';
        document.querySelector('.navbar a:nth-child(3)').textContent = 'Services';
        document.querySelector('.navbar a:nth-child(4)').textContent = 'Témoignages';
        document.querySelector('.navbar a:nth-child(5)').textContent = 'Contact';
        document.querySelector('.content h1').textContent = 'Bienvenue chez votre Psychologue Privé';
        document.querySelector('.content p').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet purus vel leo dignissim efficitur. Mauris auctor, odio at malesuada fringilla, purus arcu feugiat nisi, non dapibus libero odio id eros.';
        document.querySelector('.language-switch button').textContent = 'English';
    }
}
