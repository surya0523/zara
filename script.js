

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     const searchButton = form.querySelector("button[type='submit']"); // Ensuring it's the correct button

//     searchButton.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Get selected car type
//         const carType = document.querySelector('input[name="seater"]:checked');
//         const date = document.getElementById("date").value;
//         const location = document.getElementById("location").value.trim();
//         const time = document.getElementById("time").value;

//         // Validation checks
//         if (!carType) {
//             alert("🚗 Please select a car type (5-seater or 7-seater).");
//             return;
//         }
//         if (!date) {
//             alert("📅 Please select a valid date.");
//             return;
//         }
//         if (!location) {
//             alert("📍 Please enter a valid location.");
//             return;
//         }
//         if (!time) {
//             alert("⏰ Please select a pickup time.");
//             return;
//         }

//         // Store data in sessionStorage for use on the next page
//         sessionStorage.setItem("carType", carType.value);
//         sessionStorage.setItem("date", date);
//         sessionStorage.setItem("location", location);
//         sessionStorage.setItem("time", time);

//         // Redirect based on car type selection
//         let nextPage;
//         if (carType.value === "5seater") {
//             nextPage = "5seater.html";
//         } else if (carType.value === "7seater") {
//             nextPage = "7seater.html";
//         } else {
//             alert("❌ Error: Invalid car type selection.");
//             return;
//         }

//         window.location.href = nextPage; // Redirect
//     });
// });















// cars
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const viewDetailsBtn = document.getElementById("viewDetails");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const carType = document.getElementById("carType").value;
        const pickupLocation = document.getElementById("pickupLocation").value;
        const pickupDate = document.getElementById("pickupDate").value;
        const pickupTime = document.getElementById("pickupTime").value;

        if (!carType || !pickupLocation || !pickupDate || !pickupTime) {
            alert("Please fill all fields.");
            return;
        }

        localStorage.setItem("carType", carType);
        localStorage.setItem("pickupLocation", pickupLocation);
        localStorage.setItem("pickupDate", pickupDate);
        localStorage.setItem("pickupTime", pickupTime);

        alert("Booking details saved!");

        if (carType === "5 Seater") {
            window.location.href = "/5seater.html";
        } else if (carType === "7 Seater") {
            window.location.href = "5seater.html";
        }
    });

    viewDetailsBtn.addEventListener("click", function () {
        window.location.href = "details.html";
    });
});



// navbar 
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});



