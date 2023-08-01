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
  
  updateTime();