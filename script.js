let referenceTime = Date.UTC(2023, 7, 1);
let currentTime = Date.now();

let planetData = {
  mercury: { orbitPeriod: 88 },
  venus: { orbitPeriod: 225 },
  earth: { orbitPeriod: 365.25 },
  mars: { orbitPeriod: 687 },
  jupiter: { orbitPeriod: 4333 },
  saturn: { orbitPeriod: 10759 },
  uranus: { orbitPeriod: 30687 },
  neptune: { orbitPeriod: 60190 }
};

Object.keys(planetData).forEach(planet => {
  let element = document.querySelector('#orbit-' + planet);
  let timePassed = currentTime - referenceTime;
  let timePassedInDays = timePassed / 1000 / 60 / 60 / 24;
  let fractionOfOrbit = timePassedInDays / planetData[planet].orbitPeriod;
  let rotation =  fractionOfOrbit * 360; 
  element.style.transition = 'transform 2s';
  element.style.transform = 'rotate(' + -rotation + 'deg)';
});


function updateTime() {
  var now = new Date();

  var timeString = now.getHours().toString().padStart(2, '0') + " : " +
                   now.getMinutes().toString().padStart(2, '0')

  var timeDisplay = document.getElementById('time');

  timeDisplay.textContent = timeString;

  setTimeout(updateTime, 1000);
}

updateTime();
