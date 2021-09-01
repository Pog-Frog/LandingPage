/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("section");
printSections();
activate();
document.addEventListener("click", inView);
document.addEventListener("scroll", inView);
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function printSections() {
    let navVar = document.getElementById("navbar__list");
    for (var i = 0; i < sections.length; i++) {
        let tmp_link = sections[i].getAttribute('id');
        let tmp_name = sections[i].getAttribute('data-nav');
        let list_item = document.createElement("li");
        list_item.innerHTML = '\t<a class="menu__link" href="#' + tmp_link + '">' + tmp_name + '</a>';
        navVar.appendChild(list_item);
    }
    console.log(navVar);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport
function activate() {
    let nav_list = document.getElementById("navbar__list");
    let links = nav_list.getElementsByClassName("menu__link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace("active", "");
            }
            this.className += " active";
        });
    }

}

// Scroll to anchor ID using scrollTO event
function inView() {
    for (var i = 0; i < sections.length; i++) {
        let nav_list = document.getElementById("navbar__list");
        let links = nav_list.getElementsByClassName("menu__link");
        if (check(sections[i])) {
            sections[i].className = "your-active-class";
        }
        else {
            sections[i].classList.remove("your-active-class")
        }
    }
}

function check(item) {
    const ele = item.getBoundingClientRect();
    return (
        ele.top >= 0 &&
        ele.left >= 0 &&
        ele.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        ele.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
