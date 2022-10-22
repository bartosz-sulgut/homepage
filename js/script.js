console.log("Hello world!");

let button = document.querySelector(".js-button");
let picture = document.querySelector(".js-picture");

const pictureHandler = () => {
  picture.classList.toggle("hidePicture");
  // if (button.innerText === "Usuń zdjęcie") {
  //   return (button.innerText = "Pokaż zdjęcie");
  // } else {
  //   return (button.innerText = "Usuń zdjęcie");
  // }
  button.innerText === "Usuń zdjęcie"
    ? (button.innerText = "Pokaż zdjęcie")
    : (button.innerText = "Usuń zdjęcie");
};

button.addEventListener("click", pictureHandler);

// AddEventListener to funkcja, która przyjmuje 2 argumenty. Pierszy to jest zdarzenie na jakie ma się wykonać event, np. click, onEnterDown, onKeyPress itp.
// A drugi argument to jest funkcja jaka ma się wykonać na dany typ eventu (click, onEnterDown czy onKeyPress itp.)

// Funkcja pictureHandler to funkcja strzałkowa, która toggluje klacę z CSS mająca na celu ustawienie display na none czyli ukrycia obrazka.
// Dodatkowo za pomocą if sprawdza czy pod button.innerText jest taka sama wartość i typ jak tą, którą sprawdzamy ("Usuń zdjęcie").
// A jeżeli warunek nie jest spełniony to ustawiamy button.innerText na ("Usuń zdjęcie")

// === - wartość i typ takie same
// == - wartości takie same
// 0 === "0" -> false
// 0 == "0" -> true
// = - przypisuje wartość do danej zmiennej/ stałej

// let a = 0;
// const b = "0";
// a = 1;
// console.log("a: ", a, "b: ", b);
