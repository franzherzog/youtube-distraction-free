'use strict';
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
        el.addEventListener('click', function () {
            console.log('content clicked')
            chrome.runtime.sendMessage({ distraction: 'toggle' }, function (response) {
            });
        })
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
    var el = document.createElement('button')
    el.innerText = 'lookat mee'
    return el
}
