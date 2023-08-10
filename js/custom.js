const menuFunc = () => {
  const menuBtn = document.getElementsByClassName("mobile-menu");
  const menu = document.getElementsByClassName("menu-wrap");
  const headerSticky = document.getElementById("sticky-header-wrap");

  const stick_1 = document.getElementsByClassName("stick_1");
  const stick_2 = document.getElementsByClassName("stick_2");
  // const stick_3 = document.getElementById("stick_3");

  var triggerBool = true

  const toggleMenu = (n) => {

    if (triggerBool) {
      for (let i = 0; i < menu.length; i++) {
        menu[i].style.visibility = "visible";
        menu[i].style.opacity = "1";
        menu[i].style.transform = "scaleY(1)"
      }

      /* menu button animation */
      for (let i = 0; i < stick_2.length; i++) {
        stick_2[i].style.display = 'block';
      }
      for (let i = 0; i < stick_1.length; i++) {
        stick_1[i].style.display = 'none';
      }
    } else {

      for (let i = 0; i < menu.length; i++) {
        menu[i].style.visibility = "hidden";
        menu[i].style.opacity = "0";
        menu[i].style.transform = "scaleY(0)"
      }


      /* menu button animation */
      for (let i = 0; i < stick_2.length; i++) {
        stick_2[i].style.display = 'none';
      }
      for (let i = 0; i < stick_1.length; i++) {
        stick_1[i].style.display = 'block';
      }
    }
    triggerBool = !triggerBool;
  }

  const toggleMenu_2 = (n) => {

    if (menu[n].style.visibility !== 'visible') {
      for (let i = 0; i < menu.length; i++) {
        menu[i].style.visibility = "hidden";
        menu[i].style.opacity = "0";
        menu[i].style.transform = "scaleY(0)"
      }
      /* menu button animation */
      for (let i = 0; i < stick_2.length; i++) {
        stick_2[i].style.display = 'none';
      }
      for (let i = 0; i < stick_1.length; i++) {
        stick_1[i].style.display = 'block';
      }
      
      menu[n].style.visibility = "visible";
      menu[n].style.opacity = "1";
      menu[n].style.transform = "scaleY(1)";

      n > 0 && headerSticky.classList.add('z-9999');

      /* menu button animation */
      stick_2[n].style.display = 'block';
      stick_1[n].style.display = 'none';


    } else {
      n > 0 && headerSticky.classList.remove('z-9999');
      menu[n].style.visibility = "hidden";
      menu[n].style.opacity = "0";
      menu[n].style.transform = "scaleY(0)";

      /* menu button animation */
      stick_2[n].style.display = 'none';
      stick_1[n].style.display = 'block';

    }
    triggerBool = !triggerBool;
  }

  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", () => toggleMenu_2(i))
  }

}
/* header sticky start */
const headerStickyFunc = () => {

  const header = document.getElementById("header-wrap");
  const headerSticky = document.getElementById("sticky-header-wrap");

  headerSticky.innerHTML = header.innerHTML;

  // Get the initial position and height of the header
  const headerOffsetTop = header.offsetTop;
  const headerHeight = header.offsetHeight;

  // Function to handle the scrolling event
  function handleScroll() {
    // Get the current scroll position and viewport height
    const scrollPosition = window.pageYOffset;

    // Calculate the ending position of the header
    const endingPosition = headerOffsetTop + headerHeight + 100;

    // console.log("scrol pos : " + scrollPosition + " endPos : " + endingPosition);
    // Check if the scroll position is within the range of the header's ending position
    if (scrollPosition >= endingPosition) {
      // If yes, add a class to the header to make it sticky
      headerSticky.classList.add("sticky");
    } else {
      // If not, remove the class to make the header back to its original position
      headerSticky.classList.remove("sticky");
    }
  }

  // Attach the handleScroll function to the scroll event
  // window.addEventListener("scroll", handleScroll);


}


/* tab script start*/
const tabFunc = () => {


  const tabBtn = document.getElementsByClassName("tab-btn");
  const tabContent = document.getElementsByClassName("tabs");

  const tabActivateFunc = (n) => {
    for (let i = 0; i < tabBtn.length; i++) {
      tabBtn[i].classList.remove("active");
    }

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }

    tabBtn[n].classList.add("active");
    tabContent[n].classList.add("active");

  }

  for (let i = 0; i < tabBtn.length; i++) {
    // debugger
    tabBtn[i].addEventListener('click', () => tabActivateFunc(i), false);
  }
}

/* popup script */
const popupOpen = (id) => {
  const popup = document.getElementById(id);
  popup.classList.add('active');
}
const popupClose = (id) => {
  const popup = document.getElementById(id);
  popup.classList.remove('active');
}
/* tab script end*/

hideMe = (id) => {
  const hideElement = document.getElementById(id);
  hideElement.style.display = 'none';
}
showMe = (id) => {
  const hideElement = document.getElementById(id);
  hideElement.style.display = 'block';
}

headerStickyFunc();
menuFunc();
tabFunc();

popupFunc()

