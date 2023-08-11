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

function updateInfo(planet) {
  const leftDiv = document.getElementById('left-div');
  if (planet === 'sun') {
      leftDiv.style.transform = 'scale(0.95)';
      leftDiv.style.opacity = 0;

      setTimeout(() => {
          document.getElementById('info-title').innerText = "The Sun";
          document.getElementById('general-description').innerText = "The Sun is the star at the center of our Solar System.";
          document.getElementById('galaxy-img').src = "assets/real_sun.webp"; 
          document.getElementById('image-description').innerText = "The Sun is over 90 million miles from Earth. It emits light and heat due to nuclear fusion reactions.";
          
          const funFactsList = document.getElementById('fun-facts-list');
          while (funFactsList.firstChild) {
            funFactsList.removeChild(funFactsList.firstChild);
          }
          const facts = [
            "The Sun contains more than 99.8% of the total mass of our Solar System.",
            "Over one million Earths could fit inside the Sun.",
            "The Sun is essentially a giant fusion reactor where hydrogen atoms fuse to form helium. This process releases an immense amount of energy in the form of light and heat."
          ];
          facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            funFactsList.appendChild(li);
          });
          leftDiv.style.transform = 'scale(1)';
          leftDiv.style.opacity = 1;
      }, 400);
      
  } else if (planet == "jupiter") {
    console.log("Hovering over Jupiter!");
    leftDiv.style.transform = 'scale(0.95)';
      leftDiv.style.opacity = 0;

      setTimeout(() => {
          document.getElementById('info-title').innerText = "The Sun";
          document.getElementById('general-description').innerText = "The Sun is the star at the center of our Solar System.";
          document.getElementById('galaxy-img').src = "assets/real_sun.webp"; 
          document.getElementById('image-description').innerText = "The Sun is over 90 million miles from Earth. It emits light and heat due to nuclear fusion reactions.";
          
          const funFactsList = document.getElementById('fun-facts-list');
          while (funFactsList.firstChild) {
            funFactsList.removeChild(funFactsList.firstChild);
          }
          const facts = [
            "The Sun contains more than 99.8% of the total mass of our Solar System.",
            "Over one million Earths could fit inside the Sun.",
            "The Sun is essentially a giant fusion reactor where hydrogen atoms fuse to form helium. This process releases an immense amount of energy in the form of light and heat."
          ];
          facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact;
            funFactsList.appendChild(li);
          });
          leftDiv.style.transform = 'scale(1)';
          leftDiv.style.opacity = 1;
      }, 400);
  } else {
      leftDiv.style.transform = 'scale(1)';
      leftDiv.style.opacity = 1;
  }
}

function resetInfo() {
  const leftDiv = document.getElementById('left-div');
  leftDiv.style.transform = 'scale(0.95)';
  leftDiv.style.opacity = 0;

  setTimeout(() => {
      document.getElementById('info-title').innerText = "The Solar System";
      document.getElementById('general-description').innerText = "The solar system is a collection of celestial bodies, including the Sun, eight planets, their moons, and various comets, asteroids, and other space rocks.";
      document.getElementById('galaxy-img').src = "assets/milky3.webp";
      document.getElementById('image-description').innerText = "The Milky Way, our home galaxy, spans over 100,000 light-years in diameter. A vast collection of stars, planets, gas, and dust, it's a spiral galaxy that contains our Solar System.";

      const funFactsList = document.getElementById('fun-facts-list');
      while (funFactsList.firstChild) {
          funFactsList.removeChild(funFactsList.firstChild);
      }
      const facts = [
          "The Solar System is around 4.6 billion years old.",
          "There are 8 recognized planets in our Solar System.",
          "The Kuiper Belt, beyond Neptune, is home to many icy bodies and dwarf planets, including Pluto."
      ];
      facts.forEach(fact => {
          const li = document.createElement('li');
          li.textContent = fact;
          funFactsList.appendChild(li);
      });

      leftDiv.style.transform = 'scale(1)';
      leftDiv.style.opacity = 1;
  }, 400);
}


document.getElementById('left-div').addEventListener('animationend', function() {
  this.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
});
