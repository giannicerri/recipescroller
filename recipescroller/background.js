//testing

function helloWorld() {
    console.log("Hello, World! But from a click this time!");
}

chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello, World!");
})

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});