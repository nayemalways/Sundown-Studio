const scroll = new LocomotiveScroll({
    el: document.querySelector('#root'),
    smooth: true
});


// Hover image show section 
let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

elemContainer.addEventListener( "mouseenter", () => {
    fixedImage.style.display = "block";
});

elemContainer.addEventListener( "mouseleave", () => {
    fixedImage.style.display = "none";
});


// Add image inside fixed image card
let allElem = document.querySelectorAll(".elem");
 
allElem.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
        let image = item.getAttribute("data-image");
         fixedImage.style.backgroundImage = `url(${image})`
    })
})