'use strict';
var checkbox = document.getElementById('distraction-toggle')
checkbox.addEventListener('change', function (ev) {
    var isChecked = ev.target.checked;
    chrome.runtime.sendMessage({ distraction: 'toggle' }, function (response) {
    });
})