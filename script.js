let quote = document.getElementById("quote");

async function fetchQuote(){
    let url = "https://dummyjson.com/quotes/random"
    let res =  await fetch(url);
    let data = await res.json();
    quote.innerText = data.quote;
};
fetchQuote();
let goalInput = document.getElementById("goalInput");
let addGoalBtn = document.getElementById("addGoalBtn");
let goalList = document.getElementById("goalList");

addGoalBtn.addEventListener("click",()=>{
       if (goalInput.value === "") {
    return;
}
   let li = document.createElement("li");
   li.innerText =  goalInput.value;
   goalList.append(li);
   goalInput.value = "";
})