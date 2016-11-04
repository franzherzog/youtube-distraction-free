const inlineSvg = ` 
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   id="svg2"
   viewBox="0 0 500.00001 500.00001"
   height="500"
   width="500">
  <defs
     id="defs4" />
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-552.36216)"
     id="layer1">
    <path
       id="path4147"
       d="m 362.05521,1016.7788 c -1.72066,-1.1515 -3.92828,-10.875 -4.90574,-21.60786 -1.02938,-11.30263 -4.74292,-25.99209 -8.82494,-34.90842 -6.92603,-15.12842 -7.25947,-15.39524 -19.31644,-15.45673 -15.44679,-0.0786 -32.39916,-7.68279 -44.8207,-20.10429 -9.73407,-9.7341 -19.9893,-28.69134 -20.10429,-37.16367 -0.0438,-3.22963 -3.56696,-5.08176 -11.75583,-6.18011 -6.68259,-0.89633 -20.46625,-6.98246 -32.16643,-14.20297 -24.94695,-15.39548 -38.29764,-20.05856 -50.74394,-17.72359 -14.46858,2.7143 -24.17965,-2.61959 -46.20779,-25.38014 -21.50591,-22.22095 -42.182421,-33.06469 -63.046707,-33.06469 -9.814001,0 -9.866931,-0.0697 -9.866931,-12.99811 l 0,-12.9981 13.535913,1.97126 c 18.333917,2.67003 40.321885,11.09097 55.288635,21.17442 l 12.39097,8.34809 1.50465,-13.43502 c 1.38631,-12.3785 0.71401,-14.28792 -8.54901,-24.28031 -12.00553,-12.95083 -39.035561,-26.62711 -57.785574,-29.23754 -13.502959,-1.87991 -13.535921,-1.91146 -13.535921,-12.9596 0,-10.64212 0.369728,-11.07511 9.456613,-11.07511 21.553673,0 54.288052,13.88695 74.438212,31.57902 l 9.57698,8.4087 4.52564,-13.28203 c 14.59529,-42.83478 51.40553,-72.884 99.14738,-80.9367 14.88588,-2.51083 22.28185,-5.44052 29.30776,-11.60932 11.05828,-9.70932 13.97166,-10.35605 11.49464,-2.55168 -0.99489,3.13463 -1.05285,5.69933 -0.1288,5.69933 0.92406,0 11.75873,-5.06741 24.07702,-11.26092 12.31826,-6.19351 23.22444,-10.43336 24.2359,-9.4219 1.01149,1.0115 -5.37737,9.13159 -14.19746,18.04467 -14.99349,15.15159 -15.50819,16.10972 -7.9136,14.73093 l 8.12292,-1.47469 -6.87798,7.48197 -6.87799,7.482 5.45316,10.28641 c 2.99924,5.65752 9.62077,14.73989 14.71457,20.18305 5.09377,5.44314 9.26141,11.72885 9.26141,13.96823 0,7.13091 -11.11264,15.94511 -17.5337,13.90715 -46.32365,-14.70255 -78.33229,-19.00015 -85.81112,-11.52134 -4.94132,4.94135 -10.59873,21.79653 -10.62598,31.65821 -0.0205,7.4845 12.56996,25.92228 20.69857,30.31107 3.59401,1.94046 24.31818,4.19053 47.67756,5.17647 43.91695,1.85365 52.04858,4.12055 65.17034,18.16809 l 6.7522,7.22855 7.75587,-5.73416 c 17.65859,-13.05556 47.20052,-12.15691 59.24287,1.80213 8.07607,9.36147 8.32048,23.4575 0.75206,43.3702 -6.74436,17.74451 -4.33617,28.09966 7.2087,30.99722 l 7.44994,1.86984 -8.06154,5.31515 c -10.34639,6.82158 -19.99097,6.74537 -31.46175,-0.24878 -11.52861,-7.02935 -14.84147,-18.80311 -11.09961,-39.44718 2.50064,-13.79612 2.21967,-15.93661 -2.5497,-19.42403 -2.94799,-2.15565 -8.80442,-3.91936 -13.01431,-3.91936 -7.31756,0 -7.59475,0.53282 -6.301,12.11108 0.74432,6.66111 0.19582,16.55661 -1.21901,21.99004 -2.49781,9.59278 -2.05285,10.36485 15.36181,26.65543 26.80285,25.07276 42.92041,63.25504 40.25002,95.35192 -0.93793,11.27347 -5.41195,14.00501 -17.83274,10.88758 -5.95051,-1.49343 -6.64825,-3.60364 -7.85707,-23.76213 -0.99066,-16.52078 -3.26098,-25.9116 -8.96533,-37.08382 -7.39222,-14.47793 -8.02804,-14.96166 -19.70183,-14.98859 -6.82057,-0.0183 -18.68784,-3.11183 -27.30681,-7.12416 -20.80613,-9.68577 -23.52264,-8.91069 -9.83431,2.80601 24.33155,20.82691 40.75122,57.70045 40.75122,91.51473 0,18.0405 -0.098,18.2684 -7.83659,18.2253 -4.31013,-0.023 -9.24441,-0.9858 -10.96508,-2.1372 z m 6.48667,-335.12852 c -2.70293,-4.12516 -6.84464,-7.5003 -9.20382,-7.5003 -2.81075,0 -1.06903,-3.28052 5.05264,-9.51657 l 9.34201,-9.51659 3.6531,6.66692 c 2.00919,3.66679 5.53564,6.66689 7.83658,6.66689 5.97079,0 5.1786,4.99944 -1.10834,6.99485 -2.91054,0.92375 -6.49917,4.38529 -7.97483,7.69232 -2.64506,5.92781 -2.75241,5.90679 -7.59734,-1.48752 z m 68.1628,-4.19873 c -0.73044,-1.18188 -0.33769,-3.75128 0.87268,-5.70978 1.72107,-2.78471 2.93826,-2.6723 5.58405,0.51568 2.66151,3.20693 2.47534,4.42501 -0.87267,5.70978 -2.34082,0.89824 -4.85363,0.66618 -5.58406,-0.51568 z m -21.65179,-38.63275 c 0,-2.37665 -4.40686,-7.83753 -9.79307,-12.13528 l -9.79306,-7.81406 8.29176,-5.04252 c 4.56047,-2.77339 9.10332,-8.27605 10.09523,-12.22813 l 1.80347,-7.18561 6.19511,9.19294 c 3.40732,5.05613 9.11144,10.64688 12.6758,12.42393 6.426,3.20369 6.3952,3.28143 -3.6476,9.20683 -5.57057,3.28671 -10.12831,7.86694 -10.12831,10.17827 0,2.31133 -1.28234,4.99497 -2.84966,5.96363 -1.56732,0.96866 -2.84967,-0.1833 -2.84967,-2.56 z"
       style="fill:#e7e7e7;stroke:#dfdfdf;stroke-opacity:1;stroke-width:4.4;stroke-miterlimit:4;stroke-dasharray:none;stroke-linecap:round;fill-opacity:1" />
  </g>
</svg>
`
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
        const parent = document.createElement('div')
        parent.style.position = 'relative'
        const el = document.createElement('div')
        el.className = "distraction-free-youtube"
        el.innerHTML = `
        <div>
            <p>distractions</p>
            <label class="distraction-switch">
            <input id="distraction-toggle" type="checkbox">
            <div class="slider round"></div>
            </label>
            <p>on / off</p>
            </div>
            <h2>You saved <span>2044</span> minutes<span>* preview next Feature</span></h2>
            `
        const unicorn = document.createElement('div')
        unicorn.innerHTML = inlineSvg
        unicorn.className = 'distraction-unicorn'
        parent.appendChild(el)
        parent.appendChild(unicorn)
        return parent
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
            this.show()
        }
        else {
            this.checkbox.checked = false
            this.hide()
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