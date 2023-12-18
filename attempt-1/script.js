const inputBox = document.querySelector("input");
// const addTask = document.getElementById("addTask");
const tasksList = document.getElementById("tasksList");

function addTask() {
    if (inputBox.value === '') {
        alert("You must type something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasksList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
    // The saveData() was copied and pasted.
    saveData();
}

// The following code below was copy and pasted as I did not know what to put/did not understand the code.

tasksList.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", tasksList.innerHTML);
}

function showTask() {
    tasksList.innerHTML = localStorage.getItem("data");
}

showTask();
