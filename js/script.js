const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};


// ANIMATIONS 

var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showw')
    } else {
      entry.target.classList.remove('showw')
    }
  });
});

var hiddenElements = document.querySelectorAll('.item')
hiddenElements.forEach((el) => observer.observe(el));

// CONTACT FORM VALIDATION 

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('Contact-Form').addEventListener('submit' , function(event){
  event.preventDefault();
  validateForm();
  })
});

function validateForm(){
  var isValid = true;


 


  // Validate First Name
  var fName = document.getElementById('fName').value.trim();
  var firstnameError = document.getElementById('firstnameError');

  if(fName === ""){
      firstnameError.textContent = "First Name is required"
      firstnameError.style.display = "block";
      isValid = false;
  }else {
      firstnameError.textContent = "";
      firstnameError.style.display = "none";
  }


  // Validate Last Name
  var lName = document.getElementById('lName').value.trim();
  var lastnameError = document.getElementById('lastnameError');

  if(lName === ""){
      lastnameError.textContent = "Last Name is required"
      lastnameError.style.display = "block";
      isValid = false;
  }else {
      lastnameError.textContent = "";
      lastnameError.style.display = "none";
  }



  // Validate Email
  var email = document.getElementById('email').value.trim();
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(email === ""){
      emailError.textContent = "Email is required"
      emailError.style.display = "block";
      isValid = false;
      }else if(!emailPattern.test(email)){
          emailError.textContent = "Invalid email format"
          emailError.style.display = "block";
          isValid = false;
          }
  else {
      emailError.textContent = "";
      emailError.style.display = "none";
  }

  



  // Validate Contact
  var number = document.getElementById('phone').value.trim();
  var numberError = document.getElementById('phoneError');
  var contactNumberPattern = /^(?:\+92|03)[0-9]{9,10}$/;

  if(number === ""){
      numberError.textContent = "Contact number is required"
      numberError.style.display = "block";
      isValid = false;
      }else if(!contactNumberPattern.test(number)){
          numberError.textContent = "Invalid contact number format"
          numberError.style.display = "block";
          isValid = false;
          }
  else {
      numberError.textContent = "";
      numberError.style.display = "none";
  }



  // Validate Message
  var message = document.getElementById('message').value.trim();
  var messageError = document.getElementById('messageError');

  if(message === ""){
      messageError.textContent = "Message is required"
      messageError.style.display = "block";
      isValid = false;
  }else {
      messageError.textContent = "";
      messageError.style.display = "none";
  }


  if (isValid) {
    alert("Form submitted successfully");
    document.getElementById('Contact-Form').reset();
}

}

// REVEAL 


// REVEAL ELEMENT ON SCROLL 

var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
});

var hiddenElements = document.querySelectorAll('.box1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show1')
    } else {
      entry.target.classList.remove('show1')
    }
  });
});

var hiddenElements = document.querySelectorAll('.amazing')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show2')
    } else {
      entry.target.classList.remove('show2')
    }
  });
});

var hiddenElements = document.querySelectorAll('.button1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show3')
    } else {
      entry.target.classList.remove('show3')
    }
  });
});

var hiddenElements = document.querySelectorAll('.box2')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate2')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate3')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate4')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate5')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate6')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate7')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate8')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animate9')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animateIcon1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.my-2')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show4')
    } else {
      entry.target.classList.remove('show4')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animateButton')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show5')
    } else {
      entry.target.classList.remove('show5')
    }
  });
});

var hiddenElements = document.querySelectorAll('.animateImage')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime2')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime3')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-img1')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-img2')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-img3')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show7')
    } else {
      entry.target.classList.remove('show7')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime4')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show7')
    } else {
      entry.target.classList.remove('show7')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime5')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show7')
    } else {
      entry.target.classList.remove('show7')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime6')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show7')
    } else {
      entry.target.classList.remove('show7')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime7')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show7')
    } else {
      entry.target.classList.remove('show7')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime8')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime10')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime11')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show6')
    } else {
      entry.target.classList.remove('show6')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-anime12')
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show8')
    } else {
      entry.target.classList.remove('show8')
    }
  });
});

var hiddenElements = document.querySelectorAll('.acc-Accordian')
hiddenElements.forEach((el) => observer.observe(el));


