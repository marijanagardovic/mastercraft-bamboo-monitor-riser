const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#menu-ul');
const bookmark = document.querySelector('#bookmark');
const book =document.querySelector('.book');
const backThis = document.querySelector('#back-this');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const getStarted = document.querySelector('.getstarted');
const support = document.querySelector('#support');
const message = document.querySelector('.thanks-msg');
const gotIt = document.querySelector('#got-it');
const typeOne = document.querySelector('#type-1');
const typeTwo = document.querySelector('#type-2');
const typeThree = document.querySelector('#type-3');
const pledgeOne = document.querySelector('#pledge-one');
const pledgeTwo = document.querySelector('#pledge-two');
const types = document.querySelectorAll('.type');
const pledges = document.querySelectorAll('.pledge');

// hamburger

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

//bookmark button

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
    if (bookmark.classList.contains("active")) {
        book.innerHTML = "Bookmarked";
    } else {
        book.innerHTML = "Bookmark";
    };
});

//back this project

backThis.addEventListener('click', () => {
    modal.classList.add("show-modal");
    getStarted.classList.add("hide-get-started");
})

//close modal button

close.addEventListener('click', () => {
    modal.classList.remove("show-modal");
    getStarted.classList.remove("hide-get-started");
})

//support radio button

support.addEventListener('click', () => {
    message.classList.add("show-message");
    getStarted.classList.remove("hide-get-started");
})

//pledges title

pledgeOne.addEventListener('click', () => {
    message.classList.add("show-message");
})

//got it button

gotIt.addEventListener('click', () =>{
    message.classList.remove("show-message");
    getStarted.classList.remove("hide-get-started");
    modal.classList.remove("show-modal");
})

//border cyan ---------- when it's active

types.forEach((item) => {
    item.addEventListener("click", () =>{
        types.forEach((item) => {
            item.style.border = "1px solid var(--light-gray)";
        });
        if(item.childNodes[1].childElementCount <= 4) {
            item.style.border = "2px solid hsl(176, 50%, 47%)";
            for(var i=0; i < pledges.length; i++){   
                pledges[i].classList.add("show-pledge"); 
            }
        }
    })
})

//function for buttons on main page

const rewards = document.querySelectorAll(".reward");
rewards.forEach (reward => {
    reward.addEventListener("click", () =>{
        modal.classList.add("show-modal");
        getStarted.classList.add("hide-get-started");
    })
})




