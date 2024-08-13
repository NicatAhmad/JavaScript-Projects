const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper =document.querySelector(".imageList-wrapper");

runEventListener();

function runEventListener()
{
    form.addEventListener("submit" , search); 
    clearButton.addEventListener("click" , clear);
}
function clear ()
{
  searchInput.value="";

imageListWrapper.innerHTML=""; 
}

function search (e)
{
    const value = searchInput.value.toLowerCase().trim();
    
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,
        {
            method: "GET", 
            headers : {
                

                Authorization : "Client-ID Mi3k_FR8BdBseu68tzhTZn_RFiWIAX7l-QQEsxLTAD4" 
                
            }
        }
    ).then(res=>res.json()) 
    .then((data) => {
      
       Array.from(data.results).forEach((element) =>
    {
        addImageToUI(element.urls.small);
    })
    })
    .catch((err)=>console.log(err));

e.preventDefault();

}

function addImageToUI(url)
{
  const div = document.createElement("div");
  div.className="card";
  const img = document.createElement("img");
  img.setAttribute("src" ,url);
  img.width="300";
  img.height="300";
  div.appendChild(img);
  imageListWrapper.appendChild(div);

}