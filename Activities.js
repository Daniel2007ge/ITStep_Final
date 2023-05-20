let div = document.getElementsByTagName("div")[0]

for (let index = 0; index < Activities.length; index++) {
    let figure = document.createElement("figure")
    figure.setAttribute("class", "fig_4")
    let img = document.createElement("img")
    img.setAttribute("src", Activities[index].img)
    let figcaption = document.createElement("figcaption")
    figcaption.append(Activities[index].title)
    let button = document.createElement("button")
    button.setAttribute("onclick", "func1("+index+")")
    button.innerText = "find"
    figure.append(img)
    figure.append(figcaption)
    figure.append(button)
    div.append(figure)
}

function func1(index) {
    localStorage.setItem("type", "hotel")
    localStorage.setItem("place", "")
    localStorage.setItem("active", document.getElementsByTagName("figcaption")[index].innerHTML)
    window.open("Hotels.html")
}