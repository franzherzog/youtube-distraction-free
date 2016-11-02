export class Checkbox {
    constructor(el) {
        this.render(el)
    }
    createEl() {
        var el = document.createElement('div')
        el.innerHTML = `
            <label class="distraction-switch">
            <input id="distraction-toggle" type="checkbox">
            <div class="slider round"></div>
            </label>
            `
        return el
    }
    render(parent) {
        if (parent && parent.style && parent.style.visibility !== 'hidden') {
            parent.style.visibility = 'hidden'
            parent.parentElement.insertBefore(this.createEl(), parent.parentElement.firstChild);
        }
    }
    findDomEl() {
        return this.checkbox = document.getElementById('distraction-toggle')
    }
    setMode(state) {
        if (!this.checkbox) {
            this.findDomEl()
        }
        if (state === 'on') {
            this.checkbox.checked = true
        }
        else {
            this.checkbox.checked = false
        }
    }
    refreshState() {
        chrome.runtime.sendMessage({ request: 'mode' }, (response) => {
            this.setMode(response)
        })
    }
    registerHandler() {
        if (this.findDomEl()) {
            // get initial status of checkbox
            this.refreshState()
            this.checkbox.addEventListener('change', (ev) => {
                let mode
                if (ev.target.checked) {
                    mode = 'on'
                } else {
                    mode = 'off'
                }
                chrome.runtime.sendMessage({ setMode: mode })
            })
            return this.checkbox
        }
        else {
            return null
        }
    }
}