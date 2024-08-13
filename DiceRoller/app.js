const diceInput = document.getElementById("diceInput");
const roolBtn = document.getElementById("rollBtn");
const result = document.getElementById("results");
const allDiv = document.getElementById("divAll");

console.log(result)

roolBtn.onclick = function ()
{
    if(diceInput.value<=6 && diceInput.value>0)
    {
result.textContent = result.textContent +
 ((result.textContent.includes("dice :")) ? (" "+diceInput.value ) : 
("dice : " + diceInput.value));
    }
let img =document.createElement("img");
switch(Number(diceInput.value))
{
case 1: 
img.src="images/Dice-1.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;
case 2:
img.src="images/Dice-2.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;
case 3:
img.src="images/Dice-3.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;
case 4:
    img.src="images/Dice-4.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;
case 5:
    img.src="images/Dice-5.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;
 case 6:
    img.src="images/Dice-6.svg.png";
img.className ="images";
allDiv.appendChild(img);
break;

default:
    alert("Only you enter between 1 and 6");
}

}