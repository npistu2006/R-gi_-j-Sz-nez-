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
    const content = data.map(item=>
        `<div id="box-${item.num}" class="box">${item.num}</div>`)
    return content;
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



// Tennivalók:
// 1. Kivenni az input mező értékét
getInputValue = function(){
    return document.querySelector("#input-value").value;
}
// 2. Megfelelő-e az érték (nem string, 1-15 között van)
const checkValue = () =>{
    const value = getInputValue();
    if(!value.trim()){
        return [false,0]

    }
    if(isNaN(value)){
        return [false,0]
    }
    const currentValue = parseInt(value);
    if(currentValue < 1 || currentValue > 15){
        return [false,0]
    }
    return [true,currentValue];
}
// 3. A szinező gombra eseménykezelő hozzáadása - színező callback-eljárás





// 4. Véletlenszín
const getRandomColor = () =>{
    return Math.floor(Math.random() * 256);
}

// Színezés végrehajtása


// 5. Számokból színt készítő függvény
const createColor = () =>{
    const r = getRandomColor();
    const g = getRandomColor();
    const b = getRandomColor();
    return [ r, g, b];
}
const coloringBoxes = () =>{
    const [isValid, number ] = checkValue();
    if (!isValid){
        sendErrorMessage();
        return;
    }
    const boxes = document.querySelectorAll(".box");
    const box = Array.from(boxes).find(b => Number(b.id) === number);
    const [r,g,b] = createColor();
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}
 
function sendErrorMessage(){
    alert("Helytelen értéket adott meg!");
}

function clearInput(){
    const inputElement = document.querySelector("#num");
    inputElement.value = "none";
    inputElement.focus();
}

const coloring = () =>{
    const button = document.querySelector("#color");
    button.addEventListener("click",coloringBoxes)
    button.addEventListener("click",()=>{
        coloringBoxes();
        clearInput();
    })
}


const resetpage = () =>{
    const button = document.querySelector("#reset");
    button.addEventListener("click",()=>{
        renderBoxes();
        
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    renderBoxes();
    coloring();
    const boxes = document.querySelectorAll(".box");
    console.log("A boxlista3:", boxes); // log
});
