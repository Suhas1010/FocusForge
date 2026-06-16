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
let goals = JSON.parse(localStorage.getItem("goals")) || [];
goals.forEach((goal) => {
    let li = document.createElement("li");
    li.innerText = goal;
    goalList.append(li);
});
addGoalBtn.addEventListener("click", () => {

    if (goalInput.value === "") {
        return;
    }

    let goalText = goalInput.value;

    let li = document.createElement("li");
    li.innerText = goalText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {

        li.remove();

        goals = goals.filter((goal) => goal !== goalText);

        localStorage.setItem("goals", JSON.stringify(goals));

    });

    li.append(deleteBtn);

    goalList.append(li);

    goals.push(goalText);

    localStorage.setItem("goals", JSON.stringify(goals));

    goalInput.value = "";

});