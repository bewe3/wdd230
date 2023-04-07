document.addEventListener('DOMContentLoaded', () => {
  const options = { 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true, 
    month: '2-digit', 
    day: '2-digit', 
    year: 'numeric' 
  };
  const lastModified = new Date(document.lastModified).toLocaleString('en-US', options);
  document.getElementById('last-modified').innerHTML = lastModified;
  document.getElementById('current-year').innerHTML = new Date().getFullYear();
});
