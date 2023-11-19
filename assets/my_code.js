document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    const h1 = document.getElementById("myH1");

    button.addEventListener("click", function () {
        h1.innerHTML = "Hello World";
    });
});
