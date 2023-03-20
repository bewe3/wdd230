window.onload = function () {
    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthOfYear = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
    document.querySelector("#today").textContent = formattedDate;
    document.querySelector('#year').textContent = `${year}`;
}

function displayMessageBanner() {
  const today = new Date();
  const dayOfWeek = today.toLocaleString('en-us', { weekday: 'long' });
  const messageBanner = document.querySelector('#message');
  if (dayOfWeek === 2 || dayOfWeek === 3) {
      messageBanner.classList.remove('z-10');
      messageBanner.classList.add('z-50');
  } else {
      messageBanner.classList.add('z-10');
      messageBanner.classList.remove('z-50');
  }
}
window.addEventListener('load', displayMessageBanner);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#lastmodified').textContent = document.lastModified;
});