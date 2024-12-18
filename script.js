// Add event listener to the button
document
  .querySelector(".call-to-action button")
  .addEventListener("click", function () {
    // Add your functionality here
    alert("You clicked the button!");
  });

// Add event listener to the nav links
document.querySelectorAll("header nav ul li a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    // Add your functionality here
    alert("You clicked the link!");
  });
});
document.querySelectorAll("header nav ul li a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert(`Navigating to: ${link.textContent}`);
  });
});

link.addEventListener("click", function (event) {
  event.preventDefault();
  const section = document.querySelector(this.getAttribute("href"));
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll(".features li").forEach(function (feature) {
  feature.addEventListener("click", function () {
    feature.classList.toggle("active");
    alert(`You clicked on: ${feature.querySelector("h3").textContent}`);
  });
});




// Add event listener to the features list items
document.querySelectorAll(".features li").forEach(function (feature) {
  feature.addEventListener("click", function () {
    // Add your functionality here
    alert("You clicked the feature!");
  });
});
