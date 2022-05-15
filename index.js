class ObserverFunction {
    constructor(element, callback, falseCallback) {
        this.element = element;
        this.callback = callback;
        this.falseCallback = falseCallback;
    }

    serialize() {
        return({
            falseCallback: this.falseCallback,
            callback: this.callback,
            element: this.element
        })
    }
}

class Observer {
    constructor(ObserverFunctions, updateSpeed) {
        this.updateSpeed = updateSpeed
        if (!ObserverFunctions) this.ObserverFunctions = [];
        else this.ObserverFunctions = ObserverFunctions;
        this.startLoop()
    }

    startLoop() {
        this.id = setInterval(this.Loop.bind(this), this.updateSpeed)
    }

    Loop() {
        for(let i = 0; i < this.ObserverFunctions.length; i++){
            let Func = this.ObserverFunctions[i]
            if (this.isInView(Func.serialize().element)) {
                Func.serialize().callback()
            }
            else {
                Func.serialize().falseCallback()
            }
        }
    }

    addObserverFunction(ObserverFunctionn) {
        this.ObserverFunctions.push(ObserverFunctionn)
    }

    removeObserverFunction(ObserverFunctionn) {
        this.ObserverFunctions.splice(this.ObserverFunctions.indexOf(ObserverFunctionn), 1)
    }

    isInView(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
    }
}

console.log(document.querySelector("#wrapper").getBoundingClientRect().top)

var allowMobileScroll = false

setTimeout( () => {
    if (document.querySelector("#wrapper").getBoundingClientRect().top < 0) {
        document.getElementById("wrapper").className = "wrapper"
        document.body.style ="overflow-y: visible;"
    }
    else {
        document.getElementById("wrapper").className = "wrapperanimation"
        setTimeout(() => {document.body.style ="overflow-y: visible;"; allowMobileScroll = true}, 4900)
    }
}, 50)

var mobiledetected = false;

setInterval(() => {
    if (innerWidth <= 1186){
        // change to mobile aspect
        if (!mobiledetected) {
            console.log("Mobile Deteced")
            mobiledetected = true;
        }
        changeclass("programmingimage", "programmingimage2")
        changeclass("wrapper3text", "wrapper3textmobile font25")
        changeclass("wrapper2", "wrapper2 font25")
        document.getElementById("wrapper").classList.add("font25")
    }
    else {
        //change back
        if (mobiledetected) {
            console.log("Destop Detected")
            mobiledetected = false;
        }
        changeclass("programmingimage", "programmingimage")
        changeclass("wrapper3text", "wrapper3text")
        changeclass("wrapper2", "wrapper2")
        document.getElementById("wrapper").classList.remove("font25")
    }
}, 10)

function changeclass(id, newclass) {
    var element = document.getElementById(id)
    if (!element) {console.error("element not found!"); return;}

    element.className = newclass
}

document.body.addEventListener('touchstart', function(e) {
    if (e.target.nodeName === 'INPUT' && !allowMobileScroll) {
        e.preventDefault()
    }
});

var iswriting = false

var elementid = 'writingtext'

var element = document.getElementById(elementid)

var text = "I Love Web Design / Development and hope to be imployed in that field one day"

var index = 0

var textarray = text.split("")

setInterval(()=>{
    if (element.classList.contains('writing') && !iswriting) {
        iswriting = true
        setInterval(() => {
            if (index < textarray.length) {
                element.textContent += textarray[index];
                index++;
            }
        }, 65);
    }
}, 10)

function inview() {
    // this gets called if the element is in view
   element.classList.add("writing")
}

var myob = new Observer([new ObserverFunction(element, inview, ()=>{/*not doing anything here*/})], 10)