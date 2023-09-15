document.addEventListener("DOMContentLoaded", function () {
    const portfolioCards = document.getElementById("portfolioCards");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    let cardCount = 6; // Initial number of cards to show
    const cardsPerLoad = 3; // Number of cards to load per click

    const projects = [
        // Array of project objects with image, title, and description
        { image: "project1.jpg", title: "Project 1", description: "Description of Project 1." },
        // Add more project objects here
    ];

    function createPortfolioCard(project) {
        const card = document.createElement("div");
        card.className = "portfolio-card";
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="card-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        portfolioCards.appendChild(card);
    }

    loadMoreBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Load More';

    // function loadMoreCards() {
    //     for (let i = cardCount; i < cardCount + cardsPerLoad; i++) {
    //         if (i >= projects.length) {
    //             loadMoreBtn.style.display = "none"; // Hide button when all cards are loaded
    //             break;
    //         }
    //         createPortfolioCard(projects[i]);
    //     }
    //     cardCount += cardsPerLoad;
    // }

    loadMoreBtn.addEventListener("click", loadMoreCards);
    loadMoreCards(); // Initial load
});
