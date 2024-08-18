//import file from "./content.json" with { type: "json"}
let activities = []; 

async function getData() {
    fetch("./content.json")
    .then((res) => res.json())
    .then((data) => {activities.push(data);
        generateBoard(data);
    }) 
}

getData();

const bingoCard = document.getElementById("bingoCard")
const popupCtn = document.querySelector("#popupCtn")
const popup = document.getElementById("popup")

function generateBoard(items) {
    items.forEach(element => {
        const bingoSpot = document.createElement("div")
        bingoSpot.setAttribute( "id", element.id );
        bingoSpot.classList.add("bingoSpot")
        if (element.done) {
            bingoSpot.classList.add("done")
        } 
        bingoSpot.innerHTML = `
            <div class="title">${element.title}</div>
            <div class="icon"><i class="fa fa-${element.icon}"></i></div>
        `
        bingoSpot.addEventListener('click', openPopup)
        bingoCard.appendChild(bingoSpot)
    });
}



function openPopup() {
    let obj = (activities[0][this.id])
    popupCtn.style.display = "flex";
    popup.innerHTML = `<h1 class="title">${obj.title}</h1>
            <div class="info">${obj.info}</div>
            <button id="toggleStatus">${obj.done ? "Reset Progress" : "Mark as Done"}</button>
            <div class="icon" id="closeBtn"><i class="fa fa-close fa-2x"></i></div> `
    const closeBtn = document.getElementById("closeBtn")
    closeBtn.addEventListener('click', closePopup)
    const toggleStatusBtn = document.getElementById("toggleStatus")
    //console.log(obj)
    toggleStatusBtn.addEventListener('click', () => {
        obj.done = !obj.done;
        closePopup();

        bingoCard.childNodes[this.id].classList.toggle("done");
    })
}

function closePopup() {
    popupCtn.style.display = "none"
    //To-Do: Add close modal on click outside
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', clearBoard);

function clearBoard() {
    if (confirm("Are you sure you want to clear the board?")) {
        bingoCard.innerHTML = ''
        //TO-DO: data trues need reset
        activities = [];
        getData();
    }
}

//To-Do:
// Make reset button work (settings screen?)
    // confirm: are you sure you'd like to reset
// Include at least one form and/or input with HTML attribute validation.
// also event based validation on input
// Use at least two Browser Object Model (BOM) properties or methods.
// Add local storage
// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
// Modify at least one attribute of an element in response to user interaction.
// Read me
