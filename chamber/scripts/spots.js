document.addEventListener('DOMContentLoaded', () => {
    const spot = document.querySelector(".spots");

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
        let array = [];

        businessData.map(({ membership, id }) => {
            if (membership === "gold" || membership === "silver") {
                array.push(id);
            }
        });

        for (let i = 0; i < 3; i++) {
            let randomint = Math.floor(Math.random() * array.length);
            const selectedId = array[randomint];
            const selectedBusiness = businessData.find(
                (business) => business.id === selectedId && (business.membershipLevel === "gold" || business.membershipLevel === "silver")
            );

            const newBusiness = document.createElement("div");
            newBusiness.setAttribute("id", "spot");
            newBusiness.innerHTML = `
        <a href="${selectedBusiness.url}" class="flex justify-center"><img src="${selectedBusiness.logo}" class="h-28 rounded-md justify-center"></a>
        <h1 class="text-center">${selectedBusiness.name}</h1>
        <p class="text-center">${selectedBusiness.address}</p>
        <p class="text-center">${selectedBusiness.phone}</p>
        `;
            spot.append(newBusiness);
            array.splice(randomint, 1);
        }
    }

    loadData();
});