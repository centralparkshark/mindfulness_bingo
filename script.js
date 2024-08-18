//import file from "./content.json" with { type: "json"}
let activities = []; 

// async function getData() {
//     fetch("./content.json")
//     .then((res) => res.json())
//     .then((data) => {activities.push(data);
//         generateBoard(data);
//     }) 
// }

// getData();

const bingoCard = document.getElementById("bingoCard")
const popupCtn = document.querySelector("#popupCtn")
const popup = document.getElementById("popup")

function generateBoard(items) {
    const fragment = new DocumentFragment();
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
        fragment.appendChild(bingoSpot)
    });
    bingoCard.appendChild(fragment)
}



function openPopup() {
    let obj = (activities[this.id])
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

// also event based validation on input
// Use at least two Browser Object Model (BOM) properties or methods.
// Add local storage
// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// Modify at least one attribute of an element in response to user interaction.
// Read me


activities = [
    {"id": 0, "title": "Box Breathing", "info": "testing", "icon": "face-smile", "done": false},
    {"id": 1, "title": "Gratitude", "info": "<form id='gratitude'><label for='gratitude'>What is one thing you are grateful for?</label><input type='text' name='gratitude' id='gratitude' placeholder='I am grateful for...' required minLength='2'></form>", "icon": "face-smile", "done": false},
    {"id": 2, "title": "Box Breathing", "info": "testing", "icon": "face-smile", "done": false},
    {"id": 3, "title": "Box Breathing", "info": "testing", "icon": "face-smile", "done": false},
    {"id": 4, "title": "Box Breathing", "info": "testing", "icon": "face-smile", "done": false}
]

generateBoard(activities)