// Testing a custom sidebar popup on icon click instead of default popup
// https://stackoverflow.com/questions/39610205/how-to-make-side-panel-in-chrome-extension

// Basically: manifest.json authorizes the sidebar.js content script to run on all webpages.
// It creates an invisible iframe on all webpages for now.
// At the same time it authorizes popup.html, so it can be loaded  into the content script.
// Background.js listens for a click on the icon. On click, it sends a message "toggle" to the active tab.
// sidebar.js content script (which is loaded into tab) includes a listener that catches this.
// sidebar.js triggers the toggle() func which expands or collapses the iframe, which has html loaded into it.

console.log("side-panel script loaded");

chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg == "toggle") {
        console.log("message received");
        toggle();
    }
})

var iframe = document.createElement('iframe');
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.border = "0px";
iframe.src = chrome.runtime.getURL("/popup/popup.html")

document.body.appendChild(iframe);

function toggle() {
    if (iframe.style.width == "0px") {
        iframe.style.width = "300px";
    }
    else {
        iframe.style.width = "0px";
    }
}
