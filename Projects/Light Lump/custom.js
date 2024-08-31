var state = 'off';

function changeBulbImage() {

    if (state == 'on') {
        document.getElementById("bulbImg").src = "images/light-bulb-off.png"; // Change Bulb Src Path
        document.getElementById("bulb-button").classList.remove('active');
        document.querySelector("#bulb-button span").innerHTML = "OFF"; // Change only the text inside the span
        document.body.style.background = '#f2f2f2';  // Change body background to light gray
        state = 'off';   
    } else {
        document.getElementById("bulbImg").src = "images/light-bulb-on.png"; // Change Bulb Src Path
        document.getElementById("bulb-button").classList.add('active');
        document.querySelector("#bulb-button span").innerHTML = "ON"; // Change only the text inside the span
        document.body.style.background = '#000000';  // Change body background to black
        state = 'on';
    }
}

// Toggle the bulb state every second using a loop method
// setInterval(changeBulbImage, 1000);