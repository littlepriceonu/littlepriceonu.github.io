scroll(0, 0)
setTimeout(() => {document.body.style ="overflow-y: visible;"}, 4900)

setInterval(() => {
    if (innerWidth <= 1790){
        document.getElementById("programmingimage").className = "programmingimage2"
        document.getElementById("wrapper3text").className = "wrapper3textmobile font25"
        document.getElementById("wrapper2").className = "wrapper2 font25"
        document.getElementById("wrapper").className = "wrapper font25"
    }
    else {
        document.getElementById("programmingimage").className = "programmingimage"
        document.getElementById("wrapper3text").className = "wrapper3text"
        document.getElementById("wrapper2").className = "wrapper2"
        document.getElementById("wrapper").className = "wrapper"
    }
}, 10)