//testing

let recipeSetting = "click"

//On install, print helloworld and store default settings
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

//On click, send message to content script to toggle sidebar
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, "toggle");
    console.log('message sent');
});
