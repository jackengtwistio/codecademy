// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
function keyPlay(e) {
  e.target.style.backgroundColor = "green";
}
function keyReturn(e) {
  e.target.style.backgroundColor = "";
}
function note(e) {
  e.onmousedown = keyPlay;
  e.onmouseup = keyReturn;
}
notes.forEach(note);

let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

let lastLyric = document.getElementById("column-optional");

nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

function nextClicking(
  hideIt,
  showIt,
  {
    w1 = "HAP-",
    w2 = "PY",
    w3 = "BIRTH",
    w4 = "DAY",
    w5 = "TO",
    w6 = "YOU!",
    n1 = "G",
    n2 = "G",
    n3 = "A",
    n4 = "G",
    n5 = "C",
    n6 = "B",
  }
) {
  hideIt.hidden = true;
  showIt.hidden = false;
  document.getElementById("word-one").innerHTML = w1;
  document.getElementById("letter-note-one").innerHTML = n1;
  document.getElementById("word-two").innerHTML = w2;
  document.getElementById("letter-note-two").innerHTML = n2;
  document.getElementById("word-three").innerHTML = w3;
  document.getElementById("letter-note-three").innerHTML = n3;
  document.getElementById("word-four").innerHTML = w4;
  document.getElementById("letter-note-four").innerHTML = n4;
  document.getElementById("word-five").innerHTML = w5;
  document.getElementById("letter-note-five").innerHTML = n5;
  document.getElementById("word-six").innerHTML = w6;
  document.getElementById("letter-note-six").innerHTML = n6;
}
startOver.onclick = () => nextClicking(startOver, nextOne, {});
nextOne.onclick = () => nextClicking(nextOne, nextTwo, { n5: "D", n6: "C" });
nextTwo.onclick = () => {
  nextClicking(nextTwo, nextThree, {
    w5: "DEAR",
    w6: "FRI-",
    n3: "G",
    n4: "E",
    n5: "C",
    n6: "B",
  });
  lastLyric.style.display = "inline-block";
};
nextThree.onclick = () => {
  nextClicking(nextThree, startOver, {
    w6: "YOU!",
    n1: "F",
    n2: "F",
    n3: "E",
    n4: "C",
    n5: "D",
    n6: "C",
  });
  lastLyric.style.display = "none";
};
