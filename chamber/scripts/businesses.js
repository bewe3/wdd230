document.addEventListener('DOMContentLoaded', () => {
    var gridView = document.querySelector('#grid');
    var listView = document.querySelector('#list');
    var directoryData = document.querySelector('#directory-grid');

    gridView.addEventListener('click', () => {
        if (!gridView.classList.contains('directory-active')) {
            gridView.classList.add('directory-active');
            listView.classList.remove('directory-active');
            directoryData.classList.add('directory-cards')
            directoryData.classList.remove('directory-list')
        }
    });

    listView.addEventListener('click', () => {
        if (!listView.classList.contains('directory-active')) {
            listView.classList.add('directory-active');
            gridView.classList.remove('directory-active');
            directoryData.classList.add('directory-list')
            directoryData.classList.remove('directory-cards')
        }
    });

    const businessesData = "./data/businesses.json";

    const displayBusinesses = (businessOrg) => {
        const cards = document.querySelector("#cards");

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

    async function loadJsonData() {
        const response = await fetch(businessesData);
        const data = await response.json();
        console.log(data)
        return data;
    }

    async function getBusinessData() {
        const response = await loadJsonData();
        if (response.ok) {
            const data = await response.json();
            displayBusinesses(data.businesses);
            console.table(data.businesses);
        } else {
            console.error("There was an error loading the data.");
            const cards = document.querySelector("#cards");
            cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
        }
    }

    getBusinessData();
});