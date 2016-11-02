'use strict';
//import Checkbox from './switch'
import { Checkbox } from './switch'
window.onload = function createToggleSwitch() {
    var startpage = document.getElementById('feed-main-what_to_watch')
    var sidebar = document.getElementsByClassName('watch-sidebar-section')[1]
    var body = document.getElementsByTagName('body')[0]
    var timeout = null;
    let el = startpage || sidebar
    let checkbox = new Checkbox(el)
    checkbox.registerHandler()
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.hasOwnProperty('changedMode')) {
                checkbox.set(request.changedMode)
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
        if (document.getElementById('distraction-toggle')) {
            checkbox.refreshState()
        }
        else {
            createToggleSwitch()
        }
    }
}