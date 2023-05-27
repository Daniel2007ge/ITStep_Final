let date = new Date().getFullYear() + "-0" + (new Date().getMonth()+1) + "-" + new Date().getDate()
document.getElementsByTagName("input")[0].value = date

let card = Hotels_And_Restourants[localStorage.getItem("num1")].map
document.getElementsByTagName("iframe")[0].setAttribute("src", card)