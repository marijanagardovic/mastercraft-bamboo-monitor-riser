const hamburger = document.querySelector('#hamburger');
const navUl = document.querySelector('#menu-ul');
const bookmark = document.querySelector('#bookmark');
const book =document.querySelector('.book');

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
