const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    delay: 5000
  },
  loop: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".kanan",
    prevEl: ".kiri"
  }
});



//for top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  // for signup form

  let myLogForm = document.getElementById("modalLogForm");
  let mySignForm = document.getElementById("modalSignForm");
  
  function closeForm(){
    // myLogForm.style.display = "none";
    // mySignForm.style.display = "none";
    myLogForm.classList.remove("popup"); 
    mySignForm.classList.remove("popup"); 
  }

  function showLogForm(){
    // myLogForm.style.display = "block";
    myLogForm.classList.add("popup");    
  }

  function logopen(){
    // mySignForm.style.display = "none";
    mySignForm.classList.remove("popup");
    // myLogForm.style.display = "block";
    myLogForm.classList.add("popup");  
  }

  function signopen(){
    // myLogForm.style.display = "none";
    myLogForm.classList.remove("popup"); 
    // mySignForm.style.display = "block";
    mySignForm.classList.add("popup");  
  }

  


  //menubar toggle
  let myMenu = document.getElementById("navbar");
  let come = document.getElementById("t1");
  let go = document.getElementById("t2");

  

  function showt1(){
    myMenu.style.visibility = "visible";
    come.style.display = "none";
    go.style.display = "block";
  }
  function showt2(){
    myMenu.style.visibility = "hidden";
    come.style.display = "block";
    go.style.display = "none";
  }


  // privacy news
  document.addEventListener("DOMContentLoaded", function () {
    const privacyLink = document.querySelector(".privacy-link");
    const privacyFrame = document.getElementById("privacy-frame");
    const privacyButton = document.getElementById("close-privacy");

    privacyLink.addEventListener("click", function () {
        privacyFrame.style.display = "block";
    });

    privacyButton.addEventListener("click", function () {
        privacyFrame.style.display = "none";
    });
});



  // condition news
  document.addEventListener("DOMContentLoaded", function () {
    const conditionLink = document.querySelector(".condition-link");
    const conditionFrame = document.getElementById("condition-frame");
    const conditionButton = document.getElementById("close-condition");

    conditionLink.addEventListener("click", function () {
        conditionFrame.style.display = "block";
    });

    conditionButton.addEventListener("click", function () {
        conditionFrame.style.display = "none";
    });
});

//career
i1 = document.getElementById('rate');
i2 = document.getElementById('vid');
let myArr = [i1, i2];
let active = 1;

setInterval(() => {
  $(myArr[active - 1]).fadeOut(500)
  if (active >= myArr.length) {
    active = 0
  }
  setTimeout(() => {
    $(myArr[active]).fadeIn(500);
    active = active + 1;
  }, 500)
}, 5000)


// Testimonials
  
