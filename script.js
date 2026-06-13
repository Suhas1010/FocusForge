let quote = document.getElementById("quote");

async function fetchQuote(){
    let url = "https://dummyjson.com/quotes/random"
    let res =  await fetch(url);
    let data = await res.json();
    quote.innerText = data.quote;
};
fetchQuote();