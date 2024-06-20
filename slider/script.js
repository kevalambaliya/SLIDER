let allslider = [
    {
        src:"https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
        name: "LEAF",
    },
    {
        src:"https://www.lightstalking.com/wp-content/uploads/stephanie-leblanc-JLMEZxBcXCU-unsplash.jpg",
        name: "FROG",
    },
    {
        src:"https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
        name: "LEAF",
    },
    {
        src:"https://img.freepik.com/premium-photo/boca-nature-background_941097-30779.jpg",
        name: "CRIAMSON LEAF",
    },
    {
        src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        name: "MOUNTAINS",
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57M2knnRNhoEY6IpVvQHGa_lnCAj37OX-FTC08zR0fXkIkvNCgNxvF55PDSRkAzkDrVM&usqp=CAU",
        name: "MOUNTAIN",
    },
]


allslider.forEach((val , index) => {
    let slider = document.getElementById("slider");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let par = document.createElement("h3");

    img.src = val.src;
    par.innerHTML = val.name;
    div.classList.add("slide")
    par.className = "text"


    div.append(img);
    div.append(par);
    slider.append(div);
})
function Slider() {

    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();
