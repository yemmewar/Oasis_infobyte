let:celciusInput = document.querySelector('#celcius > input ')
let:fehrenheitInput = document.querySelector('#fehrenheit > input ')
let:kelvinInput = document.querySelector('#kelvin > input ')


let btn= document.querySelector('.button button')

function roundNumber(number){
    returnMath.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15


    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value= roundNumber(kTemp)
})