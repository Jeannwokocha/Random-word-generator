const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const click = document.querySelector(".click");

function getQuote() {
  fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((data)=>{

    let index= Math.floor(Math.random()*data.length)
    quote.textContent=data[index].text.replace(", type.fit", "");
    author.textContent=data[index].author.replace(", type.fit", "" , "2");

  });
}

window.addEventListener("load",getQuote);
click.addEventListener("click", getQuote)







