//js for popup.html page

// Initialize button
let findRecipe = document.getElementById("findRecipe");
let saveRecipe = document.getElementById("saveRecipe");

/*
chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});
*/

// When the button is clicked, run content.js on current page
findRecipe.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js'],
    });
});

saveRecipe.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['saverecipe.js'],
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}