// Magic 8 ball

// Add Event Listener
document.getElementById("ball").addEventListener("click", ballclicked);
let outputEl = document.getElementById("output");
let search = document.getElementById("search-in");
function ballclicked() {
  let randNum = Math.random();
  console.log(randNum);
  if (search.value.toLowerCase() === "does a magic 8 ball actually work?") {
    outputEl.innerHTML = "How dare you doubt me!";
  } else if (search.value.toLowerCase() === "is javascript awesome?") {
    outputEl.innerHTML = "Of Course!";
  } else if (search.value === "") {
    outputEl.innerHTML = "Ask again.";
  } else {
    if (randNum < 0.2) {
      outputEl.innerHTML = "Without a Doubt.";
      outputEl.style.color = "green";
    } else if (randNum < 0.4) {
      outputEl.innerHTML = "As I see it, yes.";
      outputEl.style.color = "green";
    } else if (randNum < 0.6) {
      outputEl.innerHTML = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      outputEl.innerHTML = "Don't count on it.";
      outputEl.style.color = "red";
    } else {
      outputEl.innerHTML = "Outlook not so good.";
      outputEl.style.color = "red";
    }
  }
}
