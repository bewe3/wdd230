localStorage.setItem('lastVisit', new Date());
let lastVisited = localStorage.getItem('lastVisit');

if (lastVisited) {
    let currentTime = new Date().getTime();
    let lastVisitTime = new Date(lastVisited).getTime();
    var timeDifference = Math.floor((currentTime - lastVisitTime) / (1000 * 60 * 60 * 24));

    document.querySelector("#lastVisited").textContent = timeDifference;

}

