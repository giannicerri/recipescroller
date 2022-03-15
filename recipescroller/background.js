//testing

let recipeSetting = "click"

chrome.runtime.onInstalled.addListener(() => {
    console.log("Hello, World!");
    chrome.storage.sync.set({ recipeSetting });
})

/*
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});
*/

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, "toggle");
    console.log('message sent');
});
