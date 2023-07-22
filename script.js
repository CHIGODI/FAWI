

document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.getElementsByClassName("dropdown");
  
    // Close the dropdowns if the user clicks outside of them
    window.onclick = function(event) {
      if (!event.target.matches(".dropbtn")) {
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i].querySelector(".dropdown-content");
          if (openDropdown.style.display === "block") {
            openDropdown.style.display = "none";
          }
        }
      }
    };
  });
  