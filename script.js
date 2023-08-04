let referenceTime = Date.UTC(2023, 7, 1);
let currentTime = Date.now();
let key = "5AJsvO8IkHKlk8M1q8vc44HnKkqrbxiIJoAolTBf"

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

fetch('https://api.nasa.gov/planetary/apod?api_key=5AJsvO8IkHKlk8M1q8vc44HnKkqrbxiIJoAolTBf')
 .then(response => response.json())
  .then(data => {
    console.log(data);
    displayNews(data);
  })
  .catch(error => console.error('Error:', error));

function displayNews(data) {
  let newsContainer = document.querySelector('#news-container');
  newsContainer.innerHTML = '';
  let date = data.date;
  let title = data.title;
  let imageUrl = data.url;
  let description = data.explanation

  let articleElement = document.createElement('div');
  articleElement.classList.add('article');

  let imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  articleElement.appendChild(imageElement);
  imageElement.width = 400
  imageElement.height = 300

  let titleElement = document.createElement('h2');
  titleElement.innerText = title;
  articleElement.appendChild(titleElement);

  let descriptionElement = document.createElement('h4');
  descriptionElement.src = description
  articleElement.appendChild(descriptionElement)

  document.getElementById('news-container').appendChild(articleElement);
}

function updateTime() {
  var now = new Date();

  var timeString = now.getHours().toString().padStart(2, '0') + " : " +
                   now.getMinutes().toString().padStart(2, '0')

  var timeDisplay = document.getElementById('time');

  timeDisplay.textContent = timeString;

  setTimeout(updateTime, 1000);
}

updateTime();
