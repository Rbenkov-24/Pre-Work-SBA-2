const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    const cost = document.querySelector("#bill-amount");
    const tip = (cost.value * 0.15).toFixed(2); //calculate 15% tip
    let temp = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = temp;
});