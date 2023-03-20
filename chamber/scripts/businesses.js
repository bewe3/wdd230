// Toggle active/not active buttons
document.addEventListener('DOMContentLoaded', () => {
    var gridSelector = document.querySelector('.grid-button');
    var listSelector = document.querySelector('.list-button');
    var directoryData = document.querySelector('#directory-grid');

    gridSelector.addEventListener('click', ()=>{
        if (!gridSelector.classList.contains('directory-active')){    
            gridSelector.classList.add('directory-active');
            listSelector.classList.remove('directory-active');
            directoryData.classList.add('directory-cards')
            directoryData.classList.remove('directory-list')
        }
    });

    listSelector.addEventListener('click', ()=>{
        if (!listSelector.classList.contains('directory-active')){
            listSelector.classList.add('directory-active');
            gridSelector.classList.remove('directory-active');
            directoryData.classList.add('directory-list')
            directoryData.classList.remove('directory-cards')
        }
    });

    // Load JSON file
    const url = "./data/businesses.json";

    const displayBusinesses = (businesss) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element

    businesss.forEach((business) => {
        let card = document.createElement("section");
        card.innerHTML = `
        <img src="${business.imgURL}">
        <p>${business.businessName}</p>
        <p>${business.streetAddress}</p>
        <p>${business.cityStateZip}</p>
        <p><a href="${business.websiteURL}">${business.websiteURL}</a></p>
        `;
        if (business.membershipLevel=='gold'){
        card.classList.add('gold-member');
        }
        cards.appendChild(card);
    }); 
    
    };

    async function getBusinessData() {
    const response = await fetch(url);
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