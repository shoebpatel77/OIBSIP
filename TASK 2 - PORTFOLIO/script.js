const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Editor";
    }, 12000);
}
textLoad();
setInterval(textLoad, 16000);