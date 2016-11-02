'use strict';
var setting = {
  status: 'on'
}
chrome.runtime.onInstalled.addListener(details => {
  console.log('background runngin')
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.distarction == "toggle")
      sendResponse({ farewell: "goodbye" });
  });