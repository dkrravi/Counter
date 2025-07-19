let count = 0;

function plus() {
  count++;
  document.getElementById("number").textContent = count;
}

function minus() {
  count--;
  document.getElementById("number").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("number").textContent = count;
}