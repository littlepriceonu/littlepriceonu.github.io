scroll(0, 0)
setTimeout(() => {document.body.style ="overflow-y: visible;"}, 4900)

setInterval(() => {
    if (innerWidth < 1034){
        document.getElementById("programmingimage").className = "programmingimage2"
    }
    else {
        //change back
    }
}, 10)