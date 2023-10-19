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
    "أرصدة",
    "أسياخ",
    "أعلاق",
    "زنبوج",
    "أسرار",
    "أجناس",
    "سمانى",
    "أحداث",
    "رومان",
    "أسداس",
    "أحساب",
    "أدباب",
    "أحيان",
    "أشفاق",
    "أطباع",
    "أغوال",
    "أرداف",
    "أدوية",
    "ليمون",
    "ماعون",
    "سفرجل",
    "أجانب",
    "أخوال",
    "أعصاب",
    "أجزاء",
    "أثلاث",
    "أزمات",
    "أقتال",
    "أصفاد",
    "أسواق",
    "أعفاج",
    "أرانب",
    "أشقاء",
    "أصفان",
    "أطفال",
    "أداحي",
    "أبدان",
    "أظهار",
    "خشخاش",
    "جرثوم",
    "صنوبر",
    "أجرات",
    "أرمدة",
    "ليرون",
    "أثمان",
    "أخثاث",
    "أحبار",
    "أخياط",
    "أراجل",
    "أعصاء",
    "أفخاذ",
    "أشياخ",
    "زنبوع",
    "أرياح",
    "أرزاق",
    "أبحار",
    "أعتاب",
    "أدواء",
    "أجلاد",
    "أبواق",
    "رعراع",
    "نرجيل",
    "أشراك",
    "أجوبة",
    "أضلاع",
    "أفران",
    "روسية",
    "أحرمة",
    "قاوون",
    "أجواف",
    "أديان",
    "أجفان",
    "أروقة",
    "دونمة",
    "سنونو",
    "أرباح",
    "مرجان",
    "ريحان",
    "أحزان",
    "علندى",
    "أسوار",
    "أصداف",
    "أشياء",
    "أخلاق",
    "أسماء",
    "أعزاب",
    "أركان",
    "ألماس",
    "آخرات",
    "أفئدة",
    "أصابع",
    "خرنوب",
    "أحزاب",
    "فلمنك",
    "حنفية",
    "أجياف",
    "عبقري",
    "أظلال",
    "أعناق",
    "أطباق",
    "بنفسج",
    "أفاعي",
    "أخمرة",
    "غريبة",
    "أجهزة",
    "كاغيد",
    "أطراف",
    "أشهاد",
    "باقلى",
    "زعرور",
    "أرجان",
    "أعدام",
    "أدوات",
    "أعقاب",
    "أسماك",
    "أشباه",
    "ارتعش",
    "أخطار",
    "أغوار",
    "هريرة",
    "فاكهة",
    "أفواه",
    "أتباع",
    "أقفاء",
    "قومية",
    "أرضون",
    "حلزون",
    "أبسطة",
    "أقلام",
    "أشكال",
    "كويكب",
    "أخامص",
    "بحيرة",
    "أحصان",
    "جثمان",
    "أفعال",
    "أرقام",
    "أحجبة",
    "أحذية",
    "سريان",
    "أحسبة",
    "أتساع",
    "أضراس",
    "أعضاء",
    "أعراس",
    "أفراق",
    "أعماق",
    "أرغفة",
    "أصباح",
    "أساسا",
    "أطيار",
    "قرطاس",
    "أعوام",
    "قصاصة",
    "أرواح",
    "أسماع",
    "إسبان",
    "أبواب",
    "أسداد",
    "أبدال",
    "أسباب",
    "ألبان",
    "أجبال",
    "أديرة",
    "أحكام",
    "أقدام",
    "آنسات",
    "بشيرة",
    "أحمال",
    "أقفية",
    "أبنية",
    "أخباز",
    "برقوق",
    "كمثرى",
    "تريبة",
    "أخداش",
    "أطباء",
    "أجذاع",
    "نصيحة",
    "قراءة",
    "مشيمة",
    "قريدس",
    "أسواط",
    "أحواش",
    "أحراز",
    "أرحام",
    "أرياق",
    "أقسام",
    "أبطال",
    "أسياد",
    "أعراض",
    "أشعار",
    "أسطار",
    "أضداد",
    "أرجاس",
    "أحضان",
    "أعدال",
    "أبراد",
    "سيارة",
    "شجيرة",
    "أحباء",
    "أغلاط",
    "أجواز",
    "أحبال",
    "أغلفة",
    "أعطاب",
    "جرجان",
    "أسافل",
    "أزيات",
    "أعسال",
    "أطماع",
    "أحماء",
    "زيتون",
    "أحياء",
    "أروام",
    "أسواء",
    "أشياع",
    "أقمشة",
    "أجواء",
    "أجباب",
    "أسئلة",
    "أصياف",
    "أضواء",
    "أعداء",
    "أحناك",
    "خطيئة",
    "أعشاش",
    "بوملي",
    "أفرشة",
    "أحيية",
    "سلباح",
    "حليمة",
    "أتلال",
    "قرموط",
    "أفنان",
    "أرنؤد",
    "دويرة",
    "أفكار",
    "ألمان",
    "أباخس",
    "أساطر",
    "أشرطة",
    "أبراج",
    "أجناب",
    "أغطية",
    "أعمال",
    "أغراب",
    "أقدار",
    "أفراد",
    "أشتية",
    "أطلاء",
    "أصبية",
    "حببور",
    "أخلاط",
    "إفرنج",
    "أبداد",
    "أدعية",
    "أديار",
    "أسباع",
    "سماوة",
    "أدبار",
    "أحراس",
    "أحوال",
    "أحقاب",
    "طماطم",
    "عيشوم",
    "أثناء",
    "أشربة",
    "أجواخ",
    "أصحاب",
    "أفيال",
    "صفصاف",
    "حمصيص",
    "أزهار",
    "أجنحة",
    "أدخنة",
    "أضياف",
    "أذناب",
    "زرجون",
    "أسفار",
    "أربعة",
    "خرطوش",
    "أجذار",
    "قلقاس",
    "عرقوب",
    "أبناء",
    "أعصار",
    "أغماد",
    "ولاية",
    "أفلاك",
    "صحابة",
    "عائلة",
    "أشجار",
    "أثواب",
    "فاحشة",
    "أجياد",
    "أحلام",
    "أخدار",
    "غبيرة",
    "قصيبة",
    "قرميد",
    "أرباع",
    "أطوال",
    "رمرام",
    "أدمغة",
    "أفغان",
    "أجبنة",
    "أفراس",
    "أحارر",
    "أرضين",
    "أتراك",
    "أشخاص",
    "أعناب",
    "أعواد",
    "جلنار",
    "أدهنة",
    "أجيال",
    "أحرام",
    "ترقوة",
    "أراضي",
    "أصنام",
    "أقفاص",
    "أقداس",
    "أجراس",
    "أصناف",
    "أجثاث",
    "عصابة",
    "أسعار",
    "أقطان",
    "أرجعة",
    "حجيرة",
    "أطيان",
    "أظفار",
    "أعداد",
    "أجسام",
    "حبيبة",
    "أذهان",
    "أسلحة",
    "أدراج",
    "أبحاث",
    "جنينة",
    "أرمية",
    "قطيرة",
    "طرفاء",
    "أخماس",
    "أعمدة",
    "أحقاف",
    "بلطجي",
    "بقالة",
    "أبخرة",
    "أخوان",
    "أبيات",
    "أشباح",
    "أعياد",
    "تشبيه",
    "أحزمة",
    "أغدية",
    "أصوات",
    "أغلاق",
    "أسنان",
    "أسلاك",
    "أطعمة",
    "وزارة",
    "أشعرة",
    "أزباب",
    "أذواق",
    "أثقال",
    "أثداء",
    "أعباء",
    "أفدنة",
    "أقطاب",
    "أعمار",
    "أبعاد",
    "أحباب",
    "أحوات",
    "أبوان",
    "أرغان",
    "زنباع",
    "قريحة",
    "أرجلة",
    "ديباج",
    "أطراب",
    "أقطار",
    "أضايف",
    "أجناد",
    "أدلاء",
    "أقفال",
    "حيوان",
    "أحلاق",
    "أخشاب",
    "أرجال",
    "معصية",
    "أذيال",
    "أحقاق",
    "أخطبة",
    "أعلام",
    "ناموس",
    "أسراب",
    "أدوار",
    "أعشار",
    "أقزام",
    "جثجاث",
    "أذنان",
    "أتربة",
    "أحجار",
    "أقمار",
    "أبشار",
    "أفلام",
    "أزواج",
    "أجنان",
    "أحصنة",
    "أعزاء",
    "أخلاد",
    "أرباب",
    "أصفار",
    "دويبة",
    "أقراص",
    "أسباط",
    "أخوات",
    "أشراع",
    "أشغال",
    "أعراب",
    "أترنج",
    "أقنعة",
    "أرقان",
    "أجداد",
    "عاطفة",
    "أطبال",
    "أعجام",
    "أسياف",
    "أخفاف",
    "أشرعة",
    "جرادة",
    "أدباء",
    "طائفة",
    "أرصفة",
    "تبلدي",
    "أزمان",
    "أغربة",
    "أجساد",
    "أساقف",
    "آخرون",
    "أجراح",
    "عشيرة",
  ];

  var word = "";
  var isGameOver = false;
  window.onload = function () {
    initialize();
    getRandomWord();
  };

  function initialize() {
    for (let r = 0; r < height; r++) {
      for (let c = width - 1; c >= 0; c--) {
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
      msg.innerText = "صحيح! الكلمة هي" + word;
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
      } else if (e.code == "Enter" && col == 0) {
        update();
        row += 1;
        col = width - 1;
      } else if (e.code == "Enter" && col != 0) {
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
      msg.innerText = "خطأ! الكلمة هي " + word;
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
