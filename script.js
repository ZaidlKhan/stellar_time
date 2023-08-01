function updateTime() {
    var now = new Date();
  
    var timeString = now.getHours().toString().padStart(2, '0') + ':' +
                     now.getMinutes().toString().padStart(2, '0') + ':' +
                     now.getSeconds().toString().padStart(2, '0');
  
    var timeDisplay = document.getElementById('time');
  
    timeDisplay.textContent = timeString;
  
    setTimeout(updateTime, 1000);
  }
  
  updateTime();

const earth = document.querySelector('.earth');
let earthAngle = 0;  

function updatePlanetPositions() {
  
  earthAngle += 360 / 365.25; 
  earth.style.transform = `rotate(${earthAngle}deg)`;

  // Repeat similar code to update the positions of the other planets...

  // Schedule the next update.
  requestAnimationFrame(updatePlanetPositions);
}
  
// Start the animation.
updatePlanetPositions();