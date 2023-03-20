window.onload = function () {
    const spot = document.querySelector("#spots");

    const dataPath = "./data/businesses.json";

    console.log(dataPath)

    async function loadJsonData() {
        const response = await fetch(dataPath);
        const data = await response.json();
        return data;
    }

    async function loadData() {
        const descriptionBusData = await loadJsonData();
        let idArray = [];

        descriptionBusData.map(({ membership, id }) => {
            if (membership === "gold") {
                idArray.push(id);
            }
        });

        for (let i = 0; i < 3; i++) {
            let rndIndex = Math.floor(Math.random() * idArray.length);
            const selectedId = idArray[rndIndex];
            const selectedBusData = descriptionBusData.find(
                (bus) => bus.id === selectedId && bus.membership === "gold"
            );

            const newBusDiv = document.createElement("div");
            newBusDiv.setAttribute("id", "spot");
            newBusDiv.innerHTML = `
        <a href="${selectedBusData.url}"><img src=""></a>
        <h1>${selectedBusData.name}</h1>
        <p>${selectedBusData.address}</p>
        <p>${selectedBusData.phone}</p>
        `;

            spot.append(newBusDiv);
            idArray.splice(rndIndex, 1);
        }
    }

    loadData();
}