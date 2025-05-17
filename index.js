const scroll = new LocomotiveScroll({
    el: document.querySelector('#root'),
    smooth: true
});


let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

elemContainer.addEventListener( "mouseenter", () => {
    fixedImage.style.display = "block";
});
elemContainer.addEventListener( "mousemove", () => {
    fixedImage.style.display = "none";
});