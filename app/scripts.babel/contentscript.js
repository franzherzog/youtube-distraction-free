'use strict';
//import Checkbox from './switch'
import { Checkbox } from './switch'
// let checkbox = new Checkbox()
window.onload = function () {
    let checkbox = new Checkbox()
    checkbox.registerHandler()
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.hasOwnProperty('changedMode')) {
                checkbox.set(request.changedMode)
            }
        })
}
var body = document.getElementsByTagName('body')[0]
function listener() {
    var startpage = document.getElementById('feed-main-what_to_watch')
    var sidebar = document.getElementsByClassName('watch-sidebar-section')[1]
    var el = createInsightEl();
    if (sidebar && sidebar.style && sidebar.style.visibility !== 'hidden') {
        sidebar.style.visibility = 'hidden'
        sidebar.parentElement.insertBefore(createInsightEl(), sidebar.parentElement.firstChild);
    }
    if (startpage && startpage.style && startpage.style.visibility !== 'hidden') {
        startpage.style.visibility = 'hidden'

        startpage.parentElement.insertBefore(el, startpage.parentElement.firstChild);
        // el.addEventListener('click', function () {
        //     console.log('content clicked')
        //     chrome.runtime.sendMessage({ distraction: true }, function (response) {
        //     });
        // })
    }
}
var timeout = null;
document.addEventListener('DOMSubtreeModified', function () {
    if (timeout) {
        clearTimeout(timeout)
    } else {
        listener()
    }
    timeout = setTimeout(listener, 500);
}, false);


function createInsightEl() {
    var el = document.createElement('div')
    el.innerHTML = `
	<label class="distraction-switch">
	<input id="distraction-toggle" type="checkbox">
	<div class="slider round"></div>
	</label>
    `
    return el
}
