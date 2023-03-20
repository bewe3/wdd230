
document.addEventListener('DOMContentLoaded', () => {
    var gridSelector = document.querySelector("#directory-grid");
    var listSelector = document.querySelector('#directory-list');
    var directoryData = document.querySelector('#directory-data');

    //toggle grid
    gridSelector.addEventListener('click', ()=>{
        if (!gridSelector.classList.contains('active')){    
            gridSelector.classList.add('active');
            listSelector.classList.remove('active');
            directoryData.classList.add('directory-cards')
            directoryData.classList.remove('directory-list')
        }
    });

    //toggle list
    listSelector.addEventListener('click', ()=>{
        if (!listSelector.classList.contains('active')){
            listSelector.classList.add('active');
            gridSelector.classList.remove('active');
            directoryData.classList.add('directory-list')
            directoryData.classList.remove('directory-cards')
        }
    });

    //json stuff
    
    const url = "chamber/data/businesses.json";
    console.log(url);

const displayBusinesses = (businessses) => {
    const cards = document.querySelector(".directory-cards"); 

    if (businessses) {
        businessses.forEach((businesses) => {
            let card = document.createElement("section");
            card.innerHTML = `
            <img src="${businesses.logo}" alt="${businesses.name}">
            <p>${businesses.name}</p>
            <p>${businesses.address}</p>
            <p><a href="${businesses.url}">${businesses.name}</a></p>
            `;
            if (businesses.membershipLevel=='Gold'){
                card.classList.add('gold-member');
            }
            cards.appendChild(card);
        });
    } else {
        console.error("No business data was found.");
    }
}; 
 

    async function getBusinessData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayBusinesses(data.businesses);
    } else {
        console.error("There was an error loading the businesses. Try again Later");
        const cards = document.querySelector("directory-cards");
        cards.innerHTML = "<section><h1>There was an error loading the businesses. Try again Later.</h1></section>";
    }
    }

    getBusinessData();

});