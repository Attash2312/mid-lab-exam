document.addEventListener('DOMContentLoaded', () => {
    const speakersData = [
        {
            name: "Yochai Benkler",
            title: "Berkman Professor of Entrepreneurial Legal Studies",
            img: "path-to-image/benkler.jpg",
            description: "Benkler studies commons-based peer production..."
        },
        {
            name: "SohYeong Noh",
            title: "Director of Art Centre Nabi",
            img: "path-to-image/noh.jpg",
            description: "As the main venue for new media art production in Korea..."
        }
    ];

    const speakersContainer = document.getElementById('speakers-container');
    
    speakersData.forEach(speaker => {
        const speakerDiv = document.createElement('div');
        speakerDiv.classList.add('speaker');
        
        speakerDiv.innerHTML = `
            <img src="${speaker.img}" alt="${speaker.name}">
            <h3>${speaker.name}</h3>
            <p>${speaker.title}</p>
            <p>${speaker.description}</p>
        `;
        
        speakersContainer.appendChild(speakerDiv);
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close');

    hamburger.addEventListener('click', () => {
        mobileNav.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });
});
