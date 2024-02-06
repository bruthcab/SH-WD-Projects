// based on screen size, update the H2 tag with the device type text

// Get the H2 tag using the document's querySelector() method
// I can also use the document's getElementById() method
var deviceH2 = document.querySelector("#deviceName");



window.addEventListener("resize", function() {
    // Get the screen width using the window's innerWidth property
    var screenWidth = window.innerWidth;

    // If the screen width is less than 768 pixels, 
    // update the H2 tag with "Mobile"
    if (screenWidth>=320 && screenWidth < 480) {
        deviceH2.textContent = "Mobile";
    }

    // If the screen width is between 480 and 768 pixels,
    //  update the H2 tag with "Tablet"
    else if (screenWidth >= 481 && screenWidth <= 768) {
        deviceH2.textContent = "Tablet";
    }

    // If the screen width is between 480 and 768 pixels,
    //  update the H2 tag with "Tablet"
    else if (screenWidth >= 769 && screenWidth <= 1024) {
        deviceH2.textContent = "Laptops or Small Screens";
    }

    // If the screen width is greater than or equal to 1024 pixels, update the H2 tag with "Desktop"
    else {
        deviceH2.textContent = "Desktop or Larger";
        }   

});