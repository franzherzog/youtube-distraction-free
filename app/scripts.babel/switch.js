export class Checkbox {
    constructor() {
    }
    findDomEl() {
        return this.checkbox = document.getElementById('distraction-toggle')
    }
    setMode(state) {
        this.checkbox.checked = state
    }
    registerHandler() {
        if (this.findDomEl()) {
            // get initial status of checkbox
            chrome.runtime.sendMessage({ request: 'mode' }, (response) => {
                this.setMode(response)
            })
            this.checkbox.addEventListener('change', (ev) => {
                let isChecked = ev.target.checked
                chrome.runtime.sendMessage({ setMode: isChecked })
            })
            return this.checkbox
        }
        else {
            return null
        }
    }
}