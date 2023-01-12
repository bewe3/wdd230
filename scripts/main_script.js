window.onload = function () {
    populate();
    function populate() {
        let text = document.lastModified;
        document.querySelector('#modified').innerHTML = text;

        document.querySelector('#year').innerHTML = new Date().getFullYear();

        console.log(new Date().getFullYear());
        console.log("hello");
    }
}