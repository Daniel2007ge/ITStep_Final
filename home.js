function filter() {    
    window.open("Hotels.html")
    localStorage.setItem("type", document.getElementsByTagName("select")[0].value)
    localStorage.setItem("place", document.getElementsByTagName("input")[0].value)
    localStorage.setItem("active", document.getElementsByTagName("select")[1].value)
}

function func2(index) {
    if (index == 0) {
        window.open("Hotels.html")
        localStorage.setItem("type", "")
        localStorage.setItem("place", "")
        localStorage.setItem("active", "")
    }else if (index == 1) {
        window.open("Trips.html")
    }else {
        window.open("Activities.html")
    }
}

function ShowHide() {
    for (let index = 0; index < 7; index++) {
        document.getElementsByTagName("a")[index].style.display = "block"
    }
    $("#slide").slideToggle(500)
}