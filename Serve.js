let date = new Date().getFullYear() + "-0" + (new Date().getMonth()+1) + "-" + new Date().getDate()
document.getElementsByTagName("input")[0].value = date
document.getElementsByTagName("input")[1].value = date

let card = Hotels_And_Restourants[localStorage.getItem("num1")]
document.getElementsByTagName("iframe")[0].setAttribute("src", card.map)

if(card.role == "restaurant"){
    document.getElementsByTagName("label")[1].style.display = "none"
    document.getElementsByTagName("input")[1].style.display = "none"
}

function Input(element) {
    document.getElementsByTagName("span")[0].innerText = element.value
}

function serv() {
    document.getElementById("parent").style.display = "flex"
    document.getElementById("dark").style = "height: 100%"

    document.getElementById("name").innerText = card.name    
    document.getElementById("time1").innerText = ""
    document.getElementById("time1").append("at: " + document.getElementsByTagName("input")[0].value)
    document.getElementById("time2").innerText = ""
    document.getElementById("time2").append("for: " + document.getElementById("range").value + " guests")
}

function No() {
    document.getElementById("parent").style.display = "none"
    document.getElementById("dark").style = "height: 0px"
}