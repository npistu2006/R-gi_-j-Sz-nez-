// Számokat tartalmazó négyzetek létrehozása

/* const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
}; */

const makeBoxes = () =>{
const data = [
    {num : 1},
    {num : 2},
    {num : 3},
    {num : 4},
    {num : 5},
    {num : 6},
    {num : 7},
    {num : 8},
    {num : 9},
    {num : 10},
    {num : 11},
    {num : 12},
    {num : 13},
    {num : 14},
    {num : 15}
];
const content = data.map((item)=>{
    return `<div id="box-${item.num}" class="box">${item.num}</div>`;
})
return content;§
}

//Négyzetek megjelenítése a html-ben:
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
    //const boxes = document.querySelectorAll(".box");
    // console.log("A boxlista2:", boxes); // log
};

// Oldal betöltésekor iniciálódik a weboldal:
//document.addEventListener("DOMContentLoaded", renderBoxes);
//const boxes = document.querySelectorAll(".box"); // Ezek a kódsorok hamarabb futnak le mint a callback függvények, ezért itt még nem létezik a renderelt boxes változó.
//console.log("A boxlista1:", boxes); // log


document.addEventListener("DOMContentLoaded", ()=>{
    renderBoxes();
    const boxes = document.querySelectorAll(".box");
    console.log("A boxlista3:", boxes); // log
});

// Tennivalók:
// 1. Kivenni az input mező értékét
// 2. Megfelelő-e az érték (nem string, 1-15 között van)
// 3. A szinező gombra eseménykezelő hozzáadása - színező callback-eljárás
// 4. Véletlenszín
// 5. Számokból színt készítő függvény
// 6. 3.feladat színező eljárásában alkalmazni ezt a színt