//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId; 
  const startChangingColor = function () {
    // if (!intervalId) { //safety check / to check if IntervalId is itself not present i.e null, then only we want it to refrence setInterval. #betterCode

        intervalId = setInterval(changeBgColor, 1000);
    // }
    
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };

  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null; // since we are overriding the value of intervalId again & again. Instead of that we can write more cleaner code by flushing it out here. #value Dereference.
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);