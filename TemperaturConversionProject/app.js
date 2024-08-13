const myInput = document.getElementById("myInput");
const tempInput1 = document.getElementById("tempInput1");
const tempInput2 = document.getElementById("tempInput2");
const submitBtn = document.getElementById("submitBtn");
const resultValue = document.getElementById("resultValue")


let calculateValue =0;
submitBtn.addEventListener("click" , calculate);

function calculate ()
{
    tempInput1.addEventListener("change" , convertCelFah);
    tempInput2.addEventListener("change" , convertFahCel);
   
    if(convertCelFah())
    {
     resultValue.textContent=((myInput.value)*9/5+32).toFixed(2) + "°F";
    }
    else if(convertFahCel())
    {
        resultValue.textContent=((myInput.value-32) * 5/9).toFixed(2) + "°C";
    }
    else 
    {
        alert("Please enter temperature..");
    }
}
function convertCelFah()
{
    
    return tempInput1.checked;
}

function convertFahCel()
{
    return tempInput2.checked;
}