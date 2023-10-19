document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  const loaderOverlay = document.querySelector(".loader-overlay");
  loader.style.display = "none";
  loaderOverlay.style.display = "none";
  if (!localStorage.getItem("visitedBefore")) {
    let startWin = document.querySelector(".startMessage");
    startWin.style.display = "flex";
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", function () {
      startWin.style.display = "none";
    });
    localStorage.setItem("visitedBefore", true);
  }

  let msg = document.getElementById("message");
  var height = 6;
  var width = 5;
  var row = 0;
  var col = 0;
  const wordsList = [
    "llama",
    "manos",
    "grano",
    "fondo",
    "lucha",
    "grues",
    "puert",
    "pazos",
    "fuerz",
    "pista",
    "dolor",
    "norte",
    "aguas",
    "gente",
    "largo",
    "peque",
    "horno",
    "campo",
    "torre",
    "mesas",
    "crudo",
    "guion",
    "rayas",
    "torti",
    "fines",
    "senso",
    "techo",
    "oliva",
    "notas",
    "tejido",
    "forro",
    "curvo",
    "algun",
    "conse",
    "banda",
    "pista",
    "negro",
    "coche",
    "curva",
    "fiest",
    "piel",
    "dulce",
    "ancho",
    "cable",
    "tejido",
    "corpo",
    "famos",
    "bocas",
    "altas",
    "fuera",
    "maizo",
    "vista",
    "silla",
    "apoyo",
    "nubes",
    "cable",
    "manos",
    "barro",
    "mucho",
    "lleno",
    "pared",
    "marco",
    "fuera",
    "barro",
    "curva",
    "ducho",
    "somos",
    "nombres",
    "vente",
    "novio",
    "perro",
    "arena",
    "fondo",
    "seman",
    "cabel",
    "medio",
    "heroe",
    "silvo",
    "curvo",
    "vista",
    "mesas",
    "calas",
    "piern",
    "viejo",
    "cator",
    "sange",
    "carga",
    "recto",
    "vigor",
    "doble",
    "camin",
  ];

  var word = "";
  var isGameOver = false;
  window.onload = function () {
    initialize();
    getRandomWord();
  };

  function initialize() {
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        let tile = document.createElement("span");
        tile.id = r.toString() + "-" + c.toString();
        tile.classList.add("tile");
        tile.innerText = "";
        document.getElementById("board").appendChild(tile);
      }
    }
  }
  function gameOver() {
    let showPop = document.getElementById("answer");
    let over = document.getElementById("overlay");
    showPop.style.display = "block";
    over.style.display = "block";
  }
  
  function update() {
    let correct = 0;
    let matchedIndices = new Array(width).fill(false);

    for (let c = 0; c < width; c++) {
      let currTile = document.getElementById(
        row.toString() + "-" + c.toString()
      );
      let letter = currTile.innerText;

      if (word[c] == letter && !matchedIndices[c]) {
        currTile.classList.add("right");
        correct += 1;
        matchedIndices[c] = true;
      } else if (word.includes(letter) && !matchedIndices.includes(true)) {
        let firstUnmatchedIndex = matchedIndices.findIndex(
          (matched) => !matched
        );
        if (
          word[firstUnmatchedIndex] === letter &&
          !matchedIndices[firstUnmatchedIndex]
        ) {
          currTile.classList.add("right");
          correct += 1;
          matchedIndices[firstUnmatchedIndex] = true;
        } else if (word.includes(letter) && !matchedIndices.includes(true)) {
          currTile.classList.add("there");
        } else {
          currTile.classList.add("wrong");
        }
      } else {
        currTile.classList.add("wrong");
      }
    }
    if (correct == width) {
      isGameOver = true;
      gameOver();
      let msg = document.getElementById("message");
      msg.innerText = "¡Lo hiciste bien! La palabra era " + word;
    }
  }
  document.addEventListener("click", function (event) {
    document.getElementById("restartBtn");
    if (event.target.id === "restartBtn") {
      window.location.reload();
    }
  });
  document.addEventListener("click", function (event) {
    document.getElementById("error-button");
    if (event.target.id === "error-button") {
      let inv = document.getElementById("error");
      inv.style.display = "none";
      let over = document.getElementById("overlay");
      over.style.display = "none";
    }
  });

  function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordsList.length);
    word = wordsList[randomIndex].toUpperCase();
    console.log(word);
  }

  document.addEventListener("keyup", (e) => {
    if (!isGameOver) {
      if (e.code.startsWith("Key") && col < width) {
        let currTile = document.getElementById(
          row.toString() + "-" + col.toString()
        );
        if (currTile.innerText == "") {
          currTile.innerText = e.code[3];
          col += 1;
        }
      } else if (e.code == "Backspace") {
        if (col > 0) {
          col -= 1;
          let currTile = document.getElementById(
            row.toString() + "-" + col.toString()
          );
          currTile.innerText = "";
        }
      } else if (e.code == "Enter" && col == 5) {
        update();
        row += 1;
        col = 0;
      } else if (e.code == "Enter" && col != 5) {
        const errorMsg = document.querySelector(".error");
        errorMsg.style.display = "flex";

        setTimeout(() => {
          errorMsg.style.transition = "opacity 0.3s ease-in-out";
          errorMsg.style.opacity = 0;
          setTimeout(() => {
            errorMsg.style.display = "none";
            errorMsg.style.opacity = 1;
          }, 300);
        }, 2000);
      }
    }

    if (row == height) {
      isGameOver = true;
      gameOver();
      let msg = document.getElementById("message");
      msg.innerText = "¡Lo entendiste mal! La palabra era " + word;
    }
  });
  let gearBtn = document.getElementById("gear");
  let close = document.getElementById("closeBtn");
  let setWin = document.getElementById("settings");
  gearBtn.addEventListener("click", function () {
    setWin.style.display = "block";
    let over = document.getElementById("overlay");
    over.style.display = "block";
  });
  close.addEventListener("click", function () {
    setWin.style.display = "none";
    let over = document.getElementById("overlay");
    over.style.display = "none";
  });
  let save = document.getElementById("saveBtn");
  let sel = document.getElementById("select");
  let savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    sel.value = savedLanguage;
  }
  save.addEventListener("click", function () {
    if (sel.value === "ar") {
      window.location.href = "arabic.html";
    } else if (sel.value === "en") {
      window.location.href = "index.html";
      console.log(word);
    } else if (sel.value === "es") {
      window.location.href = "spanish.html";
    }
    localStorage.setItem("preferredLanguage", sel.value);
    let setWin = document.getElementById("settings");
    setWin.style.display = "none";

    let over = document.getElementById("overlay");
    over.style.display = "none";
  });
  const keyboardButtons = document.querySelectorAll(
    ".keyboard-button:not(#enter):not(#del)"
  );
  keyboardButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      if (!isGameOver && col < width) {
        let currTile = document.getElementById(
          row.toString() + "-" + col.toString()
        );
        if (currTile.innerText === "") {
          currTile.innerText = event.target.innerText;
          col += 1;
        }
      }
    });
  });

  document.getElementById("del").addEventListener("click", function () {
    if (col > 0) {
      col -= 1;
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      currTile.innerText = "";
    }
  });

  document.getElementById("enter").addEventListener("click", function () {
    if (!isGameOver && col === width) {
      update();
      row += 1;
      col = 0;
    } else if (!isGameOver && col !== width) {
      const errorMsg = document.querySelector(".error");
      errorMsg.style.display = "flex";

      setTimeout(() => {
        errorMsg.style.transition = "opacity 0.3s ease-in-out";
        errorMsg.style.opacity = 0;
        setTimeout(() => {
          errorMsg.style.display = "none";
          errorMsg.style.opacity = 1;
        }, 300);
      }, 2000);
    }
  });
});
