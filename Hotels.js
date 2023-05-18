let div = document.getElementsByTagName("div")[0]
let type = localStorage.getItem("type")
let place = localStorage.getItem("place")

if ((type == "") && (place == "")){
    for (let index = 0; index < Hotels_And_Restourants.length; index++) {
    
        let figure = document.createElement("figure")
        figure.setAttribute("class", "fig_2")
        
        let img1 = document.createElement("img")
        img1.setAttribute("src", Hotels_And_Restourants[index].img)
        
        let figcaption = document.createElement("figcaption")
        figcaption.append(Hotels_And_Restourants[index].name)
        
        let footer = document.createElement("footer")
        footer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>`
        footer.append(Hotels_And_Restourants[index].location)
            
        let br = document.createElement("br")
        footer.append(br)
        
        let img2 = document.createElement("img")
        img2.setAttribute("src", Hotels_And_Restourants[index].stars)
        img2.setAttribute("class", "stars")
        footer.append(img2)
        
        let button = document.createElement("button")
        button.innerText = "More"
        button.setAttribute("onclick", "func1("+index+")")
        footer.append(button)
        
        figure.append(img1)
        figure.append(figcaption)
        figure.append(footer)
        
        div.append(figure)
    
    }
}else {
    for (let index = 0; index < Hotels_And_Restourants.length; index++) {
        if ((Hotels_And_Restourants[index].role == type) && (Hotels_And_Restourants[index].city == place || Hotels_And_Restourants[index].country == place)) {
    
            let figure = document.createElement("figure")
            figure.setAttribute("class", "fig_2")
        
            let img1 = document.createElement("img")
            img1.setAttribute("src", Hotels_And_Restourants[index].img)
        
            let figcaption = document.createElement("figcaption")
            figcaption.append(Hotels_And_Restourants[index].name)
        
            let footer = document.createElement("footer")
            footer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>`
            footer.append(Hotels_And_Restourants[index].location)
            
            let br = document.createElement("br")
            footer.append(br)
        
            let img2 = document.createElement("img")
            img2.setAttribute("src", Hotels_And_Restourants[index].stars)
            img2.setAttribute("class", "stars")
            footer.append(img2)
        
            let button = document.createElement("button")
            button.innerText = "More"
            button.setAttribute("onclick", "func1("+index+")")
            footer.append(button)
        
            figure.append(img1)
            figure.append(figcaption)
            figure.append(footer)
        
            div.append(figure)
    
        }
    }
}

function func1(element) {
    window.open("Full_Info.html")
    window.close("Hotels.html")
    localStorage.setItem("num1", element)
}