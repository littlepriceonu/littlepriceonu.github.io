window.scroll(0, 0)
setTimeout(() => {document.body.style ="overflow-y: visible;"}, 4900)

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
        changeclass("wrapper", "wrapper font25")
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
        changeclass("wrapper", "wrapper")
    }
}, 10)

function changeclass(id, newclass) {
    var element = document.getElementById(id)
    if (!element) {console.error("element not found!"); return;}

    element.className = newclass
}