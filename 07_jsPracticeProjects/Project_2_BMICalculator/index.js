const form = document.querySelector("form")
//we need to select whole form bcz the submit button is in the form. So calculate button is submit button. We'll see submit type of event here. 
//form either gets submit in /post or /get route. and when it gets submitted its value goes in URL to the server. -- this we need stop bcz we are not sending it to server, so we'll stop default action of the form. -- we have method in events.


// this usecase will give us empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#results")

    if(height === ""|| height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === ""|| weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight/(Math.pow(height,2)/10000)).toFixed(2);
        let bmiRange=null;

        if(bmi<18.6){
            bmiRange="Under Weight"
        }else if(bmi>18.6 && bmi<24.9){
            bmiRange="Normal range"
        }else {
            bmiRange="Overweight"
        }
        
        result.innerHTML= `<span>${bmi}</span> <br> <span>${bmiRange}</span>`;
    }
})