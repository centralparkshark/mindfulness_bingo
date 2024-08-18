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
        // checkIfBingo()
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
        activities.forEach(element => {
            element.done = false;
        });
        generateBoard(activities);
    }
}

const winBtn = document.getElementById("win")
winBtn.addEventListener('click', checkIfBingo)

function checkIfBingo() {
    // fake win for now
    alert("[Real Win to Be Implemented] Congrats! See what other activities you can do!")
}

const themeBtn = document.getElementById("theme")
themeBtn.addEventListener('click', changeTheme)

function changeTheme() {
    let theme = bingoCard.getAttribute("theme")
    if (theme == "dark") {
        bingoCard.parentNode.style.backgroundColor = "var(--light2)"
        bingoCard.parentNode.style.color = "var(--accent)"
        bingoCard.setAttribute("theme", "light")
    } else {
        bingoCard.parentNode.style.backgroundColor = "var(--main)"
        bingoCard.parentNode.style.color = "var(--light2)"
        bingoCard.setAttribute("theme", "dark")
    }
}

const nameBtn = document.getElementById('nameBtn')
const popUp = document.getElementById('popup')
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

nameBtn.addEventListener('click', openName)

function openName() {
    popupCtn.style.display = "flex";
    nameBox.style.display = "flex";
    popUp.style.display = "none";
}

function validateName(name) {
    const namePattern = /^[a-zA-Z\s]{2,20}$/;
    return namePattern.test(name);
}

document.getElementById('nameBox').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name should only contain letters.';
    }
    else {
        document.getElementById('welcome').innerText = `Click an activity, ${nameInput.value}`
        nameBox.style.display = "flex";
        popUp.style.display = "flex";
        popupCtn.style.display = "none";
        nameBox.style.display = "none";
        nameInput.value = '';
    }
});

//To-Do Later:
// check bingo win
// Add local storage
//goal persist (save state)
// cancel button for name change
// fix light mode pop up color scheme
// get random activity



activities = [
    {"id": 0, "title": "Breath Awareness", "info": "Focus on the rhythm of your breath, noticing each inhale and exhale.", "icon": "face-smile", "done": false},
    {"id": 1, "title": "Gratitude", "info": "<form id='gratitude'><label for='gratitude'>What is one thing you are grateful for?</label><input type='text' name='gratitude' id='gratitude' placeholder='I am grateful for...' required minLength='2'></form>", "icon": "face-smile", "done": false},
    {"id": 2, "title": "Mindful Walking", "info": "Pay attention to each step, the feel of the ground beneath your feet, and the movement of your body.", "icon": "face-smile", "done": false},
    {"id": 3, "title": "Five Senses", "info": "Engage your five senses by noticing five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.", "icon": "face-smile", "done": false},
    {"id": 4, "title": "Body Scan", "info": "Gradually move your attention through your body, noticing sensations in each part.", "icon": "face-smile", "done": false},
    {"id": 5, "title": "Mindful Eating", "info": "Eat a meal slowly, savoring each bite, and paying attention to the flavors, textures, and smells.", "icon": "face-smile", "done": false},
    {"id": 6, "title": "Nature Observation", "info": "Spend time outside, observing the details of nature around you, like the color of leaves or the sound of birds.", "icon": "face-smile", "done": false},
    {"id": 7, "title": "Loving Kindness", "info": "Send positive thoughts and feelings of love and kindness to yourself and others.", "icon": "face-smile", "done": false},
    {"id": 8, "title": "Mindful Listening", "info": "Focus entirely on the sounds around you, whether it’s music, nature, or a conversation.", "icon": "face-smile", "done": false},
    {"id": 9, "title": "Stretching", "info": "Move your body through gentle stretches, paying attention to how each movement feels.", "icon": "face-smile", "done": false},
    {"id": 10, "title": "Mantra Meditation", "info": "Repeat a calming word or phrase to yourself, focusing on its sound and rhythm.", "icon": "face-smile", "done": false},
    {"id": 11, "title": "Coloring", "info": "Use coloring as a way to focus your mind, paying attention to the colors and patterns you create.", "icon": "face-smile", "done": false},
    {"id": 12, "title": "Free Space", "info": "Just click done!", "icon": "star", "done": false},
    {"id": 13, "title": "Go for a Drive", "info": "Pay attention to the experience of driving, from the feel of the wheel to the sights and sounds on the road.", "icon": "face-smile", "done": false},
    {"id": 14, "title": "Muscle Relaxation", "info": "Tense and then relax each muscle group, noticing the contrast between tension and relaxation.", "icon": "face-smile", "done": false},
    {"id": 15, "title": "Mindful Doodling", "info": "Allow your pen to move freely on the paper, focusing on the motion and the patterns that emerge.", "icon": "face-smile", "done": false},
    {"id": 16, "title": "Take a Shower", "info": "Notice the sensations of water on your skin, the smell of soap, and the sound of the water.", "icon": "face-smile", "done": false},
    {"id": 17, "title": "Drink Tea", "info": "Prepare and drink tea (or coffee) slowly, paying attention to the warmth, taste, and aroma.", "icon": "face-smile", "done": false},
    {"id": 18, "title": "Mindful Silence", "info": "Spend a few minutes in complete silence, noticing your thoughts and how your body feels in the quiet.", "icon": "face-smile", "done": false},
    {"id": 19, "title": "Visualization", "info": "Close your eyes and visualize a peaceful scene, immersing yourself in the sights, sounds, and smells.", "icon": "face-smile", "done": false},
    {"id": 20, "title": "Posture Check", "info": "Sit or stand still and notice your posture, adjusting it to feel more aligned and relaxed.", "icon": "face-smile", "done": false},
    {"id": 21, "title": "Goal Setting", "info": "<p>Take time to set a goal with intention, focusing on how achieving it will make you feel and the steps needed to reach it.</p><form id='goal'><label for='goal'>What is your goal?</label><input type='text' name='goal' id='goal' placeholder='Enter your goal..' required minLength='2'><button id='saveGoal'>Save Goal</button></form>", "icon": "face-smile", "done": false},
    {"id": 22, "title": "Mindful Laughter", "info": "Engage in genuine laughter, noticing how it feels in your body and the joy it brings.", "icon": "face-smile", "done": false},
    {"id": 23, "title": "Morning Routine", "info": "Start your day by being fully present during your morning routine, whether it's brushing your teeth or making breakfast.", "icon": "face-smile", "done": false},
    {"id": 24, "title": "Go to a Museum", "info": "Look at an exhibit and observe its details, colors, and the emotions it evokes in you.", "icon": "face-smile", "done": false},
]

generateBoard(activities)
