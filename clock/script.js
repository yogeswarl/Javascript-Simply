setInterval(setClock,1000)
const hoursHand = document.getElementById('hour')
const minutesHand = document.getElementById('minute')
const secondsHand = document.getElementById('second')
function setClock(){
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() /60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) /12;

  setRotation(secondsHand,secondsRatio)
  setRotation(minutesHand,minutesRatio)
  setRotation(hoursHand, hoursRatio)
}

function setRotation(element,rotationRatio){
  element.style.setProperty('--rotation',rotationRatio * 360)
}
setClock()