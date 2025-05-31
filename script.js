let birinchi = +prompt("birinchi soni kiriting");
let qiymat = prompt("qiymatni tanlamg \n + \n * \n - \n /");
let ikkiikkinchi = +prompt("ikkinchi soni kriting");

function nimadur() {
  if (qiymat === '+') {
    let javob = birinchi + ikkiikkinchi;
    let bir = document.querySelector("#natijasi").innerHTML = " Javob: " + javob;
  } else if (qiymat === "*") {
    let javob = birinchi * ikkiikkinchi;
    let kopaytiruv = document.querySelector("#natijasi").innerHTML = " Javob: " + javob;
  } else if (qiymat === "-") {
    let javob = birinchi - ikkiikkinchi;
    let minus = document.querySelector("#natijasi").innerHTML = " Javob: " + javob;
  } else if (qiymat === "/") {
    let javob = birinchi / ikkiikkinchi;
    let boluvchi = document.querySelector("#natijasi").innerHTML = " Javob: " + javob;
  } else {
    alert("qayerdadir notogri ketgan");
    return
  }
}
  let bir = document.getElementById("bir").innerHTML = birinchi;
  let plus = document.getElementById("plus").innerHTML = qiymat;
  let ikki = document.getElementById("ikki").innerHTML = ikkiikkinchi;

  