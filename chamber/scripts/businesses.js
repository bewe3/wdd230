document.addEventListener('DOMContentLoaded', () => {
    var gridView = document.querySelector('#grid');
    var listView = document.querySelector('#list');
    var directoryData = document.querySelector('#directory-grid');

    gridView.addEventListener('click', () => {
        if (!gridView.classList.contains('active')) {
            gridView.classList.add('active');
            listView.classList.remove('active');
            directoryData.classList.add('directory-cards')
            directoryData.classList.remove('directory-list')
        }
    });

    listView.addEventListener('click', () => {
        if (!listView.classList.contains('active')) {
            listView.classList.add('active');
            gridView.classList.remove('active');
            directoryData.classList.add('directory-list')
            directoryData.classList.remove('directory-cards')
        }
    });

    const businessesData = "./data/businesses.json";

    const displayBusinesses = (businessOrg) => {
        const cards = document.querySelector(".directory-cards");

        businessOrg.forEach((business) => {
            let card = document.createElement("section");
            card.innerHTML = `
                <img src="${business.logo}">
                <p>${business.name}</p>
                <p>${business.address}</p>
                <p>${business.phone}</p>
                <p><a href="${business.url}">${business.url}</a></p>
                `;
            cards.appendChild(card);
        });
  
    };

    async function getBusinessData() {
        const response = await fetch(businessesData);
        if (response.ok) {
            const data = await response.json();
            displayBusinesses(data.businesses);
            console.table(data.businesses);
        } else {
            console.error("There was an error loading the data.");
            const cards = document.querySelector(".directory-cards");
            cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
        }
    }

    getBusinessData();
});