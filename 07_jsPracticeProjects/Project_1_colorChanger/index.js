const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        console.log(e); //PointerEvent
        console.log(e.target); //span of clicked span
        document.body.style.backgroundColor = e.target.id});
    // Event listener listens to different events like mouse over,page refresh, page load. Here we explicitly mentioned to listen to click event. and in call back we write what to do when that event occurs. "e" name can be anything but it represent object of event.
    });