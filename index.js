// Event listener for sidebar item click
document.querySelectorAll(".sidebar ul li").forEach(function(item) {
    item.addEventListener("click", function() {
      document.querySelectorAll(".sidebar ul li.active").forEach(function(activeItem) {
        activeItem.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  
  // Event listener for open button click
  document.querySelector(".open-btn").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.add("active");
  });
  
  // Event listener for close button click
  document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.remove("active");
  });
  
