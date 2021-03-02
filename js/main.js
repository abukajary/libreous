//SLIDER
new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 5,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        426: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView:4,
            spaceBetween: 50,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
    freeMode: true,
});
//SLIDER
//SHOW PROFILE
let profileBtn = document.getElementById('profileBtn')
let profile = document.querySelector('.profile')
let close = document.getElementById('close')
let isProfile = false
profileBtn.addEventListener('click', ()=> {
    if (isProfile) {
        profile.style.width = "0px";
        document.body.style.overflow = "visible";
        profileBtn.style.color = "white";
        isProfile = false;
    } else {
        profile.style.width = "30vw";
        document.body.style.overflow = "hidden";
        profileBtn.style.color = "#e68836";
        isProfile = true;
    }
})
close.addEventListener('click', ()=> {
    profile.style.width = "0px";
    document.body.style.overflow = "visible";
})



var firebaseConfig = {
    apiKey: "AIzaSyCgwLWM2HKEFYYebuICF_QgHbJ9NYZs9G4",
    authDomain: "libreous-b419b.firebaseapp.com",
    projectId: "libreous-b419b",
    storageBucket: "libreous-b419b.appspot.com",
    messagingSenderId: "1032866008484",
    appId: "1:1032866008484:web:d5749dc17698f3f8fc4531"
  };
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');

// usersRef.on("child_added",)
  