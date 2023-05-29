let obj1 = JSON.parse(localStorage.getItem("user"))
document.getElementById("User").innerText = obj1.firstName

let obj2 = JSON.parse(localStorage.getItem("served"))
document.getElementsByTagName("img")[0].setAttribute("src", obj2.Img)
document.getElementsByTagName("figcaption")[0].innerText = obj2.Name
document.getElementsByClassName("star")[0].setAttribute("src", obj2.Stars)
document.getElementsByTagName("p")[1].innerHTML = "<span>location: </span>" + obj2.Location
document.getElementsByTagName("p")[2].innerHTML = "<span>guests count: </span>" + obj2.Guests
document.getElementsByTagName("p")[3].innerHTML = "<span>date of visit: </span>" + obj2.Visiting
document.getElementsByTagName("p")[4].innerHTML = "<span>date of check out: </span>" + obj2.CheckingOut

document.getElementsByTagName("input")[0].value = obj1.firstName
document.getElementsByTagName("input")[1].value = obj1.lastName
document.getElementsByTagName("input")[2].value = obj1.email
document.getElementsByTagName("input")[3].value = obj1.password

if (localStorage.getItem("user") != null) {
    document.getElementsByClassName("home_tag_a")[0].setAttribute("href", "UserPage.html")
    document.getElementsByClassName("slide_a")[0].setAttribute("href", "UserPage.html")
}

function funcOpen(e){
    if (e == 0) {
        localStorage.setItem("type", "hotel")
    } else {
        localStorage.setItem("type", "restaurant")
    }
    localStorage.setItem("place", "")
    localStorage.setItem("active", "")
    window.open("Hotels.html")
    window.close("home.html")
    window.close("UserPage.html")
    window.close("Profile.html")
}

function ShowHide() {
    for (let index = 0; index < 7; index++) {
        document.getElementsByClassName("slide_a")[index].style.display = "block"
    }
    $("#slide").slideToggle(500)
}

function Delete() {
    localStorage.removeItem("served")
    window.close("Profile.html")    
    window.open("Serve.html")
}