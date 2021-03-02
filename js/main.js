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
let profileParams = (width, overflow, t_color) => {
    profile.style.width = width;
    document.body.style.overflow = overflow;
    profileBtn.style.color = t_color;
}
profileBtn.addEventListener('click', ()=> {
    if (isProfile) {
        profileParams("0px", "visible", "white")
        isProfile = false;
    } else {
        profileParams("30vw", "hidden", "#e68836")
        isProfile = true;
    }
})
close.addEventListener('click', ()=> {
    profileParams("0px", "visible", "white")
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

const dbRef = firebase.database().ref("books");
const container = document.getElementsByClassName("swiper-wrapper")[0]
let date_array = []
let raiting_array = []
dbRef.on("value", function(snapshot) {
    const container = document.getElementsByClassName("swiper-wrapper")[0]
    snapshot.val().forEach(element => {
        date_array.push(element)
        raiting_array.push(element)
        container.insertAdjacentHTML('beforeend',`
            <div class="swiper-slide">
                <div class="slider__info">
                    <div class="slider__book_img" style="background-image: url(${element.image_url})">
                        
                    </div>
                    <p>Book name: ${element.name} </p>
                    <p>Book author:${element.author} 1</p>
                </div>

            </div>
        `) 
    });  
    sortByRaiting()
    sortByDate()
    callSlider()
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

function sortByDate(){
    const container = document.getElementsByClassName("swiper-wrapper")[1]
    date_array.sort(function(a,b){
        let dt1 = a.date.split("/")
        let dt2 = b.date.split("/")
        if(parseInt(dt2[2]) > parseInt(dt1[2])){
            return -1;
        }
        else if(parseInt(dt2[2]) === parseInt(dt1[2]) && parseInt(dt2[1]) > parseInt(dt1[1])){
            return -1;
        }
        else if(parseInt(dt2[2]) === parseInt(dt1[2]) && parseInt(dt2[1]) === parseInt(dt1[1]) && 
            parseInt(dt2[0]) > parseInt(dt1[0])){
            return -1;
        }
        if(parseInt(dt2[2]) < parseInt(dt1[2])){
            return 1;
        }
        else if(parseInt(dt2[2]) === parseInt(dt1[2]) && parseInt(dt2[1]) < parseInt(dt1[1])){
            return 1;
        }
        else if(parseInt(dt2[2]) === parseInt(dt1[2]) && parseInt(dt2[1]) === parseInt(dt1[1]) && 
            parseInt(dt2[0]) < parseInt(dt1[0])){
            return 1;
        }
        return 0;
    })
    date_array.forEach(element => {
        container.insertAdjacentHTML('beforeend',`
            <div class="swiper-slide">
                <div class="slider__info">
                    <div class="slider__book_img" style="background-image: url(${element.image_url})">
                        
                    </div>
                    <p>Book name: ${element.name} </p>
                    <p>Book author:${element.author} 1</p>
                </div>

            </div>
        `)
    });   
}

function sortByRaiting(){
    const container = document.getElementsByClassName("swiper-wrapper")[2]
    raiting_array.sort(function(a,b){
        if(a.raiting < b.raiting){
            return -1;
        }
        else if(a.raiting > b.raiting){
            return 1;
        }
        return 0;
    })
    raiting_array.forEach(element => {
        container.insertAdjacentHTML('beforeend',`
            <div class="swiper-slide">
                <div class="slider__info">
                    <div class="slider__book_img" style="background-image: url(${element.image_url})">
                        
                    </div>
                    <p>Book name: ${element.name} </p>
                    <p>Book author:${element.author} 1</p>
                </div>

            </div>
        `)
    });
}

function callSlider(){
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
}
