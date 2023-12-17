document.addEventListener("DOMContentLoaded", function () {
  let exercise1 = document.getElementById("exercise1");
  exercise1.addEventListener("click", function () {
    let trangleBase = Number(prompt("Podaj podstawę trójkąta"));
    let trangleHeight = Number(prompt("Podaj wysokość trójkąta"));

    if (trangleBase > 0 && trangleHeight > 0) {
      let result = 0.5 * trangleBase * trangleHeight;
      alert(`Pole trójkąta wynosi ${result}`);
      let spanElement = document.getElementById("trangle");
      alert(`Pole trujkąta wynosi ${result}`);
    } else {
      alert(
        "Nie można obliczyć pola trójkąta. Wprowadzono ujemną zmienną lub zero."
      );
    }
  });
  let exercise2 = document.getElementById("exercise2");
  exercise2.addEventListener("click", function () {
    alert("Idziesz przez las, nagle spotykasz wilka, co robisz?");
    let option = prompt(
      "Uciekasz [1], Obserwujesz [2], Podnosisz kamień [3], Idziesz dalej [4]"
    );
    switch (option) {
      case "1":
        alert("Wilk cie nie goni, bo wilki nie atakują ludzi");
        break;
      case "2":
        alert("Wilk patrzy sie na Ciebie po czym odchodzi w głąb lasu");
        break;
      case "3":
        alert("Wilk zaczyna się tobą interesować, pokazuje swoje kły");
        break;
      case "4":
        alert("Wilk nie zauwaza ciebie, kazdy z was idzie w swoją strone");
        break;
      default:
        alert("nie wybrałeś opcji. THE END");
    }
  });

  let exercise3 = document.getElementById("exercise3");
  exercise3.addEventListener("click", function () {
    let number1 = Number(prompt("Podaj pierwsza liczbe dodatnia: "));
    let number2 = Number(prompt("Podaj druga liczbe dodatnia: "));
    if (number1 < 0 && number2 < 0) {
      alert("Nie podales ani jednej liczby dodatniej");
    } else if (number2 < 0) {
      alert(`liczba ${number2} jest ujemna`);
    } else if (number1 < 0) {
      alert(`liczba ${number1} jest ujemna`);
    } else {
      let result = number1 + number2 / 2;
      alert(`Średnia liczby ${number1} i ${number2} to ${result}`);
    }
  });
  let exercise4 = document.getElementById("exercise4");
  exercise4.addEventListener("click", function () {
    let a = Number(prompt("Podaj zmienna a:"));
    let b = Number(prompt("Podaj zmienna b:"));
    let c = Number(prompt("Podaj zmienna c:"));
    let delta = b * b - 4 * a * c;

    if (delta === 0) {
      x = -b / (2 * a);
      alert(`równanie ma jedno rozwiazanie, x1 = ${x}`);
    } else if (delta < 0) {
      alert("Nie ma takiego x ktory spelnial by to równanie");
    } else {
      x1 = (-b - Math.sqrt(delta)) / (2 * a);
      x2 = (-b + Math.sqrt(delta)) / (2 * a);
      alert(`równanie ma dwa rozwiazania x1 = ${x1} i x2 = ${x2}`);
    }
  });

  let exercise5 = document.getElementById("exercise5");
  exercise5.addEventListener("click", function () {
    let word = prompt("podaj slowo aby spawdzic czy jest palindromem");
    let maxLength = word.length;

    for (var i = 0; i < maxLength; i++) {
      // console.log`to jest petla ${i}`
      // console.log`to jest petla ${word[(maxLength -1)-i]}`
      if (word[i] != word[maxLength - 1 - i]) {
        alert("nie to nie palindrom, nie poddawaj sie!");
        return false;
      } else {
        alert("brawo, slowo jest palidnromem!!");
        return true;
      }
    }
  });

  let exercise6 = document.getElementById("exercise6");
  exercise6.addEventListener("click", function () {
    let nameAndSurname = prompt("Podaj imie i nazwisko");
    variableList = nameAndSurname.split(" ");
    alert(`${variableList[0]} ${variableList[1][0]}.`);
  });
  let exercise7 = document.getElementById("exercise7");
  exercise7.addEventListener("click", function () {
    moreThan10 = [];
    let no1 = prompt("Podaj liczbę 1");
    let no2 = prompt("Podaj liczbę 2");
    let no3 = prompt("Podaj liczbę 3");
    if (no1 > 10) {
      moreThan10.push(no1);
    }
    if (no2 > 10) {
      moreThan10.push(no2);
    }
    if (no3 > 10) {
      moreThan10.push(no3);
    }
    console.log(`Liczby wiekrze od 10 to: ${moreThan10}`);
  });
  let exercise8 = document.getElementById("exercise8");
  exercise8.addEventListener("click", function () {
    numberList = [];
    let num1 = prompt("Podaj liczbę 1");
    numberList.push(num1);
    let num2 = prompt("Podaj liczbę 2");
    numberList.push(num2);
    let num3 = prompt("Podaj liczbę 3");
    numberList.push(num3);
    console.log(numberList);
    let chosenNumber = Math.floor(Math.random() * numberList.length);
    console.log(`Wylosowana liczba to: ${numberList[chosenNumber]}`);
  });
});
