const activities = [
    {id: 0, title: "Box Breathing", info: "testing", icon: "face-smile", done: false},
    {id: 1, title: "Test", info: "loremklsdfhsdjkfhfulafhaklfjh jsfdhajlfahsejfh ausfh rufg hargf uierghuakrjehgnaurgjhrng jahnfjdfdgh aujdg hasufgj hafguj ahfg ujkergh iuaklregdsg ", icon: "leaf", done: false},
    {id: 2, title: "Test", info: "testing", icon: "heart", done: true},
    {id: 3, title: "Test", info: "testing", icon: "droplet", done: false},
    {id: 4, title: "Test", info: "testing", icon: "eye", done: false},
]
// middle should be free space

const bingoCard = document.getElementById("bingoCard")
const popupCtn = document.querySelector("#popupCtn")
const popup = document.getElementById("popup")

function generateBoard() {
    activities.forEach(element => {
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
    let obj = (activities[this.id])
    popupCtn.style.display = "flex";
    popup.innerHTML = `<h1 class="title">${obj.title}</h1>
            <div class="info">${obj.info}</div>
            <button id="toggleStatus">${obj.done ? "Reset Progress" : "Mark as Done"}</button>
            <div class="icon" id="closeBtn"><i class="fa fa-close fa-2x"></i></div> `
    const closeBtn = document.getElementById("closeBtn")
    closeBtn.addEventListener('click', closePopup)
    const toggleStatusBtn = document.getElementById("toggleStatus")
    console.log(obj)
    toggleStatusBtn.addEventListener('click', () => {
        activities[this.id].done = !activities[this.id].done;
        closePopup();
        console.log(activities[this.id])
        bingoCard.childNodes[this.id].classList.toggle("done")
    })
}

function closePopup() {
    popupCtn.style.display = "none"
    //To-Do: Add close modal on click outside
}



generateBoard();

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