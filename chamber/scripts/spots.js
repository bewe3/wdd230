document.addEventListener('DOMContentLoaded', () => {
    const spot = document.querySelector("#spots");

    const dataPath = "./data/businesses.json";

    console.log(dataPath)

    async function loadJsonData() {
        const response = await fetch(dataPath);
        const data = await response.json();
        console.log(data)
        return data;
    }

    async function loadData() {
        const businessData = await loadJsonData();
        let idArray = [];

        businessData.map(({ membership, id }) => {
            if (membership === "gold") {
                idArray.push(id);
            }
        });

        for (let i = 0; i < 3; i++) {
            let rndIndex = Math.floor(Math.random() * idArray.length);
            const selectedId = idArray[rndIndex];
            const selectedBusiness = businessData.find(
                (business) => business.id === selectedId && business.membershipLevel === "gold"
            );

            const newBusiness = document.createElement("div");
            newBusiness.setAttribute("id", "spot");
            newBusiness.innerHTML = `
        <a href="${selectedBusiness.url}"><img src="${selectedBusiness.logo}"></a>
        <h1>${selectedBusiness.name}</h1>
        <p>${selectedBusiness.address}</p>
        <p>${selectedBusiness.phone}</p>
        `;
            spot.append(newBusiness);
            idArray.splice(rndIndex, 1);
        }
    }

    loadData();
});