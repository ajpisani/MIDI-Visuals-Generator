document.getElementById("fScreenButton");
document.getElementById("pAmount");
document.getElementById("sAmount");
document.getElementById("fAmount");
document.getElementById("midiMenu");
document.getElementById("pAmountS");
document.getElementById("sAmountS");
document.getElementById("fAmountS");

pAmountS.innerText = pAmount.value;
sAmountS.innerText = sAmount.value;
fAmountS.innerText = fAmount.value;

fScreenButton.style.backgroundColor = "grey";
fScreenButton.addEventListener("mouseover", function () {
  fScreenButton.style.backgroundColor = "limegreen";
});
fScreenButton.addEventListener("mouseout", function () {
  fScreenButton.style.backgroundColor = "grey";
});

pAmount.addEventListener("input", function () {
  pAmountS.innerText = pAmount.value;
});
sAmount.addEventListener("input", function () {
  sAmountS.innerText = sAmount.value;
});
fAmount.addEventListener("input", function () {
  fAmountS.innerText = fAmount.value;
});
