// ==========================
// FILTER GALLERY
// ==========================

const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            } else if (item.classList.contains(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

// ==========================
// LIGHTBOX
// ==========================

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counter = document.querySelector(".counter");

let currentIndex = 0;

function showImage(index){

    lightbox.classList.add("active");

    lightboxImg.src = images[index].src;

    counter.innerHTML = `${index+1} / ${images.length}`;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        showImage(currentIndex);

    });

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    showImage(currentIndex);

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

// ==========================
// KEYBOARD SUPPORT
// ==========================

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("theme-btn");

let dark = false;

themeBtn.addEventListener("click",()=>{

    dark = !dark;

    if(dark){

        document.body.style.background="#111";
        document.body.style.color="#fff";

        document.querySelector(".about").style.background="#1d1d1d";

        themeBtn.innerHTML='<i class="ri-sun-line"></i>';

    }else{

        document.body.style.background="#f5f7fb";
        document.body.style.color="#222";

        document.querySelector(".about").style.background="#fff";

        themeBtn.innerHTML='<i class="ri-moon-fill"></i>';

    }

});