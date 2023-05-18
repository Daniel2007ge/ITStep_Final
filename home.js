function func1() {    
    window.open("Hotels.html")
    localStorage.setItem("type", document.getElementsByTagName("select")[0].value)
}

function func2(index) {
    if (index == 0) {
        window.open("Hotels.html")
    }else if (index == 1) {
        window.open("Trips.html")
    }else {
        window.open("Activities.html")
    }
}