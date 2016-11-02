'use strict';
var setting = {
  mode: 'on'
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.hasOwnProperty('request') && request.request === 'mode' && sendResponse) {
      sendResponse(setting.mode)
    }

    if (request.hasOwnProperty('setMode') && request.setMode !== setting.mode) {
      const message = { changedMode: setting.mode };
      setting.mode = request.setMode
      chrome.runtime.sendMessage(message)
      chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        }
      });
    }
  }) 