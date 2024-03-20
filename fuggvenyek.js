import orak from "./adatok.js";

const tarolo = document.querySelector(".tartalom");

function karytaLetrehoz() {
  for (let i = 0; i < orak.length; i++) {
    tarolo.innerHTML += `<div><p>${orak[i].marka}</p><p>${orak[i].anyag}</p><p>${orak[i].ar}</p></div>`;
  }
}

function esemenyek() {
  const kartyak = tarolo.querySelectorAll("div");
  const htmlLista = document.querySelector(".kivalasztott");
  const kivalasztottak = [];
  let szamlalo = [1, 1, 1, 1, 1];

  kartyak.forEach((kartya, i) => {
    kartya.addEventListener("mouseover", () => {
      kartya.className = "kiv";
    });
    kartya.addEventListener("mouseleave", () => {
      kartya.className = "";
    });
    kartya.addEventListener("click", () => {
      if (!kivalasztottak.includes(orak[i].marka)) {
        kivalasztottak.push(orak[i].marka);
        htmlLista.innerHTML += `<li>${orak[i].marka} <p>1</p>db</li>`;
      } else {
        for (let j = 0; j < kivalasztottak.length; j++) {
          if (kivalasztottak[j] === orak[i].marka) {
            szamlalo[j]++;
            let db = document.querySelectorAll("li")[j].querySelector("p");
            db.innerHTML = szamlalo[j];
          }
        }
      }
    });
  });
}

function dolgozat() {
  karytaLetrehoz();
  esemenyek();
}

export default dolgozat;
