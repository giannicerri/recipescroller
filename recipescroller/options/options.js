//js for options.html page

//in short: loop through presetSettings and construct a button for each one, append to buttonDiv.
// then set up a handler for button click: unhighlight old one, highlight new selection, store new setting

let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetSettings = ["click", "autoscroll", "autopopup"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
    // Remove styling from the previously selected color
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let recipeSetting = event.target.dataset.recipeSetting;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ recipeSetting });
    chrome.storage.sync.get("recipeSetting", (data) => {
        alert(data.recipeSetting);
    });
}

// Add a button to the page for each supplied color
function constructOptions(buttonSettings) {
    chrome.storage.sync.get("recipeSetting", (data) => {
        let currentSetting = data.recipeSetting;
        // For each color we were provided…
        for (let buttonSetting of buttonSettings) {
            // …create a button with that color…
            let button = document.createElement("button");
            button.dataset.recipeSetting = buttonSetting;
            //button.style.backgroundColor = "lightgreen";
            button.innerText = buttonSetting;

            // …mark the currently selected color…
            if (buttonSetting === currentSetting) {
                button.classList.add(selectedClassName);
            }

            // …and register a listener for when that button is clicked
            button.addEventListener("click", handleButtonClick);
            page.appendChild(button);
        }
    });
}

// Initialize the page by constructing the color options
constructOptions(presetSettings);