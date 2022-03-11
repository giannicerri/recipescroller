//testing

let recipeSetting = "click"

chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello, World!");
    chrome.storage.sync.set({ recipeSetting });
    //console.log('Default search type set to %cgreen', `color: ${recipeSetting}`);
})

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});