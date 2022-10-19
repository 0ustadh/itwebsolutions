// Responsive Topnav
function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
   }
// Responsive Topnav end

// Dark mode program
function toggleMode(){
    const bod = document.body;
    bod.classList.toggle('w3-black');
    // For dark mode button content
    toggleText();
    // For cards
    cardDark();
    // For toggle button
    toggleBtn();
    // For Card headers
    toggleHead();
    // For Footer
    darkFoot();
    // For darkgreen
    darkToTeal();
    }

    function toggleText(){
      const toggler = document.getElementById('toggle');
      const toggler2 = document.getElementById('toggle2');
        if (toggler.innerHTML === 'Light' && toggler2.innerHTML === 'Light'){
          toggler.innerHTML = "Dark";
          toggler2.innerHTML = "Dark";
        } else{
          toggler.innerHTML = "Light";
          toggler2.innerHTML = "Light";
        }
      }

    // Changes bgcolor of toggler when clicked 
    function toggleBtn(){
      const btn = document.getElementById('toggle');
      const btn2 = document.getElementById('toggle2');
      btn.classList.toggle('w3-black');
      btn2.classList.toggle('w3-black');
      }
    
    // Custom Dark theme for cards
    function cardDark(){
      document.querySelectorAll(".w3-card").forEach((el) => {
        el.classList.toggle('card-dark');
      });
    }

    // Headers will be white when in Dark Mode
    function toggleHead() {
        document.querySelectorAll(".head").forEach((el) => {
          el.classList.toggle('w3-text-white');
        });
    }

    // Dark Mode Footer 
    function darkFoot() {
      let x = document.getElementById('footer');
      if (x.className.indexOf("w3-metro-black") == -1) {
        x.className += " w3-metro-black";
      } else {
        x.className = x.className.replace(" w3-metro-black", " card-dark");
      }
    }

    // Dark mode of darkgreen
    function darkToTeal() {
      document.querySelectorAll(".darkgreen").forEach((el) => {
        el.classList.toggle('w3-text-teal');
      });
    }

    // Dark mode by default
    window.onload = function() {
       toggleMode(); 
    }
    // Dark mode program end

    // The Accordion
    function accordion(id) {
      let x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }

    // Accordion Text Toggle
    function accText(id) {
      let txt = document.getElementById(id);
      /* it would be <element onclick='accText("txt1")'><span id='txt1'>
      </span></element> */
      if (txt.innerHTML === 'More'){
        txt.innerHTML = "Less";
      } else{
        txt.innerHTML = "More";
      }
    }
    
    // View all details 
    function viewDetails() {
      // Change detail toggler bgcolor when clicked
      document.getElementById('details').classList.toggle('w3-white');
      // It's main program
      document.getElementById('accordion1').click();
      document.getElementById('accordion2').click();
      document.getElementById('accordion3').click();
      document.getElementById('accordion4').classList.toggle('w3-show');
      document.getElementById('txt1').click();
      document.getElementById('txt2').click();
      document.getElementById('txt3').click();
    }
    // Accordion end