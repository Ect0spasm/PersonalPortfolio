//slidescontainer 
const c1Wrapper = document.getElementById("c1-wrapper");
//slide
const c1Slide = document.querySelector(".c1-slide");
const prevButton = document.getElementById("c1-arrow-prev")
const nexButton = document.getElementById("c1-arrow-next");

nexButton.addEventListener("click", (event) => {
    const slideWidth = c1Slide.clientWidth;
c1Wrapper.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = c1Slide.clientWidth;
c1Wrapper.scrollLeft += slideWidth;
});