let referenceTime = Date.UTC(2023, 7, 1);
let currentTime = Date.now();
let key = "5AJsvO8IkHKlk8M1q8vc44HnKkqrbxiIJoAolTBf"
let years = []

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


const url = 'https://api.spaceflightnewsapi.net/v3/articles/';

fetch(url)
    .then(response => response.json())
    .then(data => {
      let items = data.slice(0, 4);
      let rightDiv = document.getElementById("right-div"); 

      items.forEach(item => {
        let titleString = item.title;
        let publishedAtString = item.publishedAt;
        let urlString = item.url;

        let articleDiv = document.createElement("div");
        articleDiv.className = "news-article";

        let titleElement = document.createElement("h3");
        titleElement.className = "news-title";
        titleElement.textContent = titleString;

        let dateElement = document.createElement("p");
        dateElement.className = "news-date";
        dateElement.textContent = new Date(publishedAtString).toLocaleDateString();

        let linkElement = document.createElement("a");
        linkElement.className = "news-link";
        linkElement.href = urlString;
        linkElement.target = "_blank"; 
        linkElement.textContent = "Read more";

        articleDiv.appendChild(titleElement);
        articleDiv.appendChild(dateElement);
        articleDiv.appendChild(linkElement);

        rightDiv.appendChild(articleDiv);
      });
    })
    .catch(error => console.error('Error:', error));



function updateTime() {
  var now = new Date();

  var timeString = now.getHours().toString().padStart(2, '0') + " : " +
                   now.getMinutes().toString().padStart(2, '0')

  var timeDisplay = document.getElementById('time');

  timeDisplay.textContent = timeString;

  setTimeout(updateTime, 1000);
}

updateTime();
