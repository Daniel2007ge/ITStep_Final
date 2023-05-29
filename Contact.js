for (let index = 0; index < Workers.length; index++) {
    let div  = document.getElementsByTagName("div")[0]

    let figure = document.createElement("figure")
    
    let img = document.createElement("img")
    img.setAttribute("src", Workers[index].img)

    let figcaption = document.createElement("figcaption")
    figcaption.innerText = Workers[index].name + " " + Workers[index].lastname

    let p1 = document.createElement("p")
    p1.innerText = Workers[index].role

    let p2 = document.createElement("p")
    p2.innerText = Workers[index].email

    figure.append(img)
    figure.append(figcaption)
    figure.append(p1)
    figure.append(p2)

    div.append(figure)
}