'use strict';
//import Checkbox from './switch'
import { Checkbox } from './switch'
var lastUrl = '';
window.onload = function createToggleSwitch() {
    var startpage = document.getElementById('feed-main-what_to_watch')
    var sidebar = document.getElementsByClassName('watch-sidebar-section')[1]
    var body = document.getElementsByTagName('body')[0]
    var timeout = null;
    let elementsToHide = [startpage, sidebar]
    let checkbox = new Checkbox(elementsToHide)
    checkbox.registerHandler()
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.hasOwnProperty('changedMode')) {
                checkbox.setMode(request.changedMode)
            }
        })
    document.addEventListener('DOMSubtreeModified', () => {
        if (timeout) {
            clearTimeout(timeout)
        } else {
            // listener()
        }
        timeout = setTimeout(listener, 500)
    }, false);
    function listener() {
        var currentLocation = window.location.href;
        if (changedURL(currentLocation)) {
            if (document.getElementById('distraction-toggle')) {
                checkbox.refreshState()
            }
            else {
                createToggleSwitch()
            }
        }
    }
    function changedURL(current) {
        if (current !== lastUrl) {
            lastUrl = current
            return true
        } else {
            return false
        }
    }
}