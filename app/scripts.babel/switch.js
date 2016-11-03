export class Checkbox {

    constructor(el) {
        this.parents = []
        if (el.constructor === Array) {
            this.parents = el
        } else {
            this.parents.push(el)
        }
        this.parents.map((el) => {
            this.insert(el)
        })

    }
    createEl() {
        const el = document.createElement('div')
        el.innerHTML = `
            <label class="distraction-switch">
            <input id="distraction-toggle" type="checkbox">
            <div class="slider round"></div>
            </label>
            `
        return el
    }
    insert(el) {
        if (el && el.style && el.style.visibility !== 'hidden') {
            el.style.visibility = 'hidden'
            el.parentElement.insertBefore(this.createEl(), el.parentElement.firstChild);
        }
    }
    render() {
        this.parents.map(this.insert)
    }
    hide() {
        this.parents.map(function (parent) {
            if (parent && parent.style && parent.style.visibility !== 'visible') {
                parent.style.visibility = 'visible'
            }
        })
    }
    show(parent) {
        this.parents.map(function (parent) {
            if (parent && parent.style && parent.style.visibility !== 'hidden') {
                parent.style.visibility = 'hidden'
            }
        })
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
            this.hide()
        }
        else {
            this.checkbox.checked = false
            this.show()
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
                ev.preventDefault()
                let mode
                // if (ev.target.checked) {
                //     mode = 'on'
                // } else {
                //     mode = 'off'
                // }
                chrome.runtime.sendMessage({ setMode: 'toggle' })
            })
            return this.checkbox
        }
        else {
            return null
        }
    }
}