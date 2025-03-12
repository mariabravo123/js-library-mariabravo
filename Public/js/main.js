document.addEventListener("DOMContentLoaded", function () {
  // Create the map and set initial location (Peru)
  var map = L.map("map").setView([-9.19, -75.0152], 5);

  // Add the map layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Add markers to tourist spots
  var locations = [
    { name: "Machu Picchu", coords: [-13.1631, -72.545] },
    { name: "Lima", coords: [-12.0464, -77.0428] },
    { name: "Cusco", coords: [-13.532, -71.9675] },
    { name: "Nazca", coords: [-14.8356, -74.9383] },
    { name: "Amazon Rainforest", coords: [-3.4653, -62.2159] },
  ];

  locations.forEach((loc) => {
    L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`);
  });

  // Select the form by its ID
  const form = document.getElementById("contact-form");

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form data (for example, the name input value)
    const name = document.getElementById("name").value;

    // Check if the name field is filled out
    if (name) {
      // Show a success message using SweetAlert2
      Swal.fire({
        title: "Success!",
        text: `Hello, ${name}. Your form has been submitted successfully!`, // Personalized message
        icon: "success", // Icon for success
        confirmButtonText: "OK", // Button text
      });
    } else {
      // If the name field is empty, show an error message
      Swal.fire({
        title: "Error!",
        text: "Please enter your name before submitting.",
        icon: "error", // Icon for error
        confirmButtonText: "Try Again",
      });
    }
  });

  // Function to initialize ScrollReveal
  function initializeScrollReveal() {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(
      ".ih_text-container, .card, .contact-container, #img01",
      {
        distance: "-150px",
        duration: 800,
        easing: "ease-in",
        delay: 300,
        origin: "top",
        opacity: 0,
        reset: true,
      }
    );

    ScrollReveal().reveal(".a_text-container", {
      distance: "-150px",
      duration: 500,
      easing: "ease-in",
      origin: "top",
      opacity: 0,
    });

    ScrollReveal().reveal(
      "#machu, #cuzco, #amazon, #img03, #img05, #img07, #img09, #img11",
      {
        distance: "-150px",
        duration: 800,
        easing: "ease-in",
        delay: 300,
        origin: "left",
        opacity: 0,
        reset: true,
      }
    );

    ScrollReveal().reveal(
      "#lima, #nazca, #img02, #img04, #img06, #img08, #img10",
      {
        distance: "-150px",
        duration: 800,
        easing: "ease-in",
        delay: 300,
        origin: "right",
        opacity: 0,
        reset: true,
      }
    );
  }

  // Function to initialize Glide.js
  function initializeGlide() {
    console.log("Initializing Glide.js...");

    const config = {
      type: "carousel",
      perView: 2,
      gap: 10,
      breakpoints: {
        1047: {
          perView: 2,
          gap: 5,
        },
        600: {
          perView: 1,
        },
      },
    };

    document.querySelectorAll(".glide").forEach((glideElement, index) => {
      console.log(`Initializing Glide for carousel ${index + 1}`);
      new Glide(glideElement, config).mount();
    });
  }

  // Check the screen width and apply logic
  function handleResize() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      initializeScrollReveal();
    } else {
      initializeGlide();
    }
  }

  // Apply initial logic
  handleResize();

  // Add a listener for window resize
  window.addEventListener("resize", handleResize);
});