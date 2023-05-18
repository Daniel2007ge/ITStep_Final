let div = document.getElementsByTagName("div")[0]

for (let index = 0; index < Activities.length; index++) {
    let figure = document.createElement("figure")
    figure.setAttribute("class", "fig_4")
    let img = document.createElement("img")
    img.setAttribute("src", Activities[index].img)
    let figcaption = document.createElement("figcaption")
    figcaption.append(Activities[index].title)
    figure.append(img)
    figure.append(figcaption)
    div.append(figure)
}