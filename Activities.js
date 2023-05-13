let card = globalVariable2.Activities
let div = document.getElementsByTagName("div")[0]

for (let index = 0; index < card.length; index++) {
    let figure = document.createElement("figure")
    figure.setAttribute("class", "fig_4")
    let img = document.createElement("img")
    img.setAttribute("src", card[index].img)
    let figcaption = document.createElement("figcaption")
    figcaption.append(card[index].title)
    figure.append(img)
    figure.append(figcaption)
    div.append(figure)
}