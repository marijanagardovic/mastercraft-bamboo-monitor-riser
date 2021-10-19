const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#menu-ul');
const bookmark = document.querySelector('#bookmark');
const book =document.querySelector('.book');
const backThis = document.querySelector('#back-this');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const getStarted = document.querySelector('#getstarted');

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
})

//close modal button

close.addEventListener('click', () => {
    modal.classList.remove("show-modal");
    getStarted.classList.add("hide-modal");
})
