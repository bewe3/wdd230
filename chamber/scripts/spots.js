const businesses = "./data/businesses.json";

function spots(businessList){
    const spots = document.querySelector("#spots"); 
    businessList = businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel == 'silver');
    spotlights = [];
    for (let i = 0; i < 3; i++){
        var elt = Math.floor(Math.random() * businessList.length)
        spotlights.push(businessList.splice(elt,1));
    }
    console.log(businessList)

    businessList.forEach((businessList) => {
        let spotlight = document.createElement("section");
        spotlight.innerHTML = `
        <h2>${businessList.name}</h2>
        <img src="${businessList.imageUrl}" alt="${businessList.name} loading="lazy">
        <h3>"${businessList.phrase}"</h3>
        <h4>${businessList.websiteUrl}</h4>
        <h4>${businessList.phoneNumber}</h4><hr>
        `;
        spots.appendChild(spotlight);
      }); 
};

async function data() {
    const response = await fetch(businesses);
    if (response.ok) {
      const data = await response.json();
      spots(data.businesses);
    } else {
      console.error("There was an error loading the businesses. Try again Later");
      const spotlight = document.querySelector("#spots"); 
      spotlight.innerHTML = "<section><h1>There was an error loading the businesses. Try again Later.</h1></section>";
    }
  }
  
  data();

