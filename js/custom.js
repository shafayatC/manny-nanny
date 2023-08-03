const menuBtn = document.getElementById("mobile-menu"); 
const menu = document.getElementById("menu-wrap"); 

const stick_1 = document.getElementById("stick_1");
const stick_2 = document.getElementById("stick_2");
// const stick_3 = document.getElementById("stick_3");

var triggerBool = true

menuBtn.addEventListener("click", ()=>{

    if(triggerBool){
        menu.style.visibility = "visible";
        menu.style.opacity = "1";
        menu.style.transform = "scaleY(1)"

        /* menu button animation */
        stick_2.style.display = 'block'; 
        stick_1.style.display = 'none';

        
    }else {
        menu.style.visibility = "hidden";
        menu.style.opacity = "0";
        menu.style.transform = "scaleY(0)"
        
        /* menu button animation */
        stick_2.style.display = 'none'; 
        stick_1.style.display = 'block';
    }
     triggerBool = !triggerBool;
})


/* header sticky start */
const header = document.getElementById("header-wrap");

// Get the initial position and height of the header
const headerOffsetTop = header.offsetTop;
const headerHeight = header.offsetHeight;

// Function to handle the scrolling event
function handleScroll() {
  // Get the current scroll position and viewport height
  const scrollPosition = window.pageYOffset;

  // Calculate the ending position of the header
  const endingPosition = headerOffsetTop + headerHeight;

  console.log("scrol pos : " + scrollPosition + " endPos : " + endingPosition);
  // Check if the scroll position is within the range of the header's ending position
  if (scrollPosition >= endingPosition) {
    // If yes, add a class to the header to make it sticky
    header.classList.add("sticky");
  } else {
    // If not, remove the class to make the header back to its original position
    header.classList.remove("sticky");
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);


/* header sticky end */