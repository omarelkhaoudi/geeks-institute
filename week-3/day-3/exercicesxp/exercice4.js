// stop form from refreshing the page

function calculateVolume(event) {
    event.preventDefault();

const radius = document.getElementById("radius").value;
const volumeField = document.getElementById("volume");

if (radius > 0) {
    // let radnum = Number(radius);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(2);  
} else {
    volumeField.value = "Invalid radius";
}
}

// attach function to form submit

document.getElementById("MyForm").addEventListener("submit", calculateVolume);