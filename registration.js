$(document).ready
(
    $("form").slideUp(0),

    $("button:first").click(
        function () {
            $("div:first").slideUp(1000),
            $("form:first").slideDown(1000)
        }
    ),

    $($("button")[1]).click(
        function () {
            $("div:first").slideUp(1000),
            $($("form")[1]).slideDown(1000)
        }
    )
)

function func1(input) {
    input.nextElementSibling.style = "opacity: 1"
}

let x = 0
function func2(img) {
    if(x == 0){
        img.previousElementSibling.type = "text"
        img.src = "images/eye1.png"
        x = 1
    }else{
        img.previousElementSibling.type = "password"
        img.src = "images/eye2.png"
        x = 0
    }
}

$("#login").click(function () {
    let input1 = $($("input")[0]).val()
    let input2 = $($("input")[1]).val()
    let check = false
    for (let index = 0; index < Users.length; index++) {
        if((input1 == Users[index].name) && (input2 == Users[index].password)){
            check = true
            localStorage.setItem("user", JSON.stringify(Users[index]))
            $("span").animate({opacity: "0"})
            window.open("UserPage.html")
        }
        if(input1 == ""){
            check = true
            $($("span")[0]).animate({opacity: "1"})
            localStorage.removeItem("user")
        }
        if(input2 == "") {
            check = true
            $($("span")[1]).animate({opacity: "1"})
            localStorage.removeItem("user")
        }
    }
    if(!check){
        $("span").animate({opacity: "0"})
        window.open("ErrorPage.html")
    }
})


// $("#login").click(function () {
//     let input1 = $($("input")[0]).val()
//     let input2 = $($("input")[1]).val()
//     let check = false

//     fetch('http://kketelauri-001-site1.gtempurl.com/api/user/login', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ 
//             "email": input1,
//             "password": input2,
//         })
//     })
//     .then(response => response.json())
//     .then(response => console.log(JSON.stringify(response)))

//     for (let index = 0; index < Users.length; index++) {
//         if((input1 == Users[index].email) && (input2 == Users[index].password)){
//             check = true
//             localStorage.setItem("user", JSON.stringify(Users[index]))
//             $("span").animate({opacity: "0"})
//             window.open("UserPage.html")
//         }
//         if(input1 == ""){
//             check = true
//             $($("span")[0]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }
//         if(input2 == "") {
//             check = true
//             $($("span")[1]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }
//     }
//     if(!check){
//         $("span").animate({opacity: "0"})
//         window.open("ErrorPage.html")
//     }
// })

$("#signup").click(function () {
    let inputName = $($("input")[2]).val()
    let inputEmail = $($("input")[3]).val()
    let inputPassword = $($("input")[4]).val()
    let check2 = false

    for (let index = 0; index < Users.length; index++) {
        if ((inputName == Users[index].name) || (inputEmail == Users[index].email)) {
            // $($("span")[0]).append("Account with that kind of name or email is already existed")
            alert("Account with that kind of name or email is already existed")
            check2 = true
        }
        if (inputName == "") {
            check2 = true
            $($("span")[2]).animate({opacity: "1"})
            localStorage.removeItem("user")
        }
        if (inputEmail == "") {
            check2 = true
            $($("span")[3]).animate({opacity: "1"})
            localStorage.removeItem("user")
        }
        if(inputPassword == ""){
            check2 = true
            $($("span")[4]).animate({opacity: "1"})
            localStorage.removeItem("user")
        }
    }

    if (!check2) {
        Users.push({name: inputName, email: inputEmail, password: inputPassword})
        localStorage.setItem("user", JSON.stringify({name: inputName, email: inputEmail, password:inputPassword}))
        $("span").animate({opacity: "0"})
        window.open("UserPage.html")
    }
})

// $("#signup").click(function () {
//     let inputName = $($("input")[2]).val()
//     let inputSurname = $($("input")[3]).val()
//     let inputEmail = $($("input")[4]).val()
//     let inputPassword = $($("input")[5]).val()
//     let check2 = false

//     fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "userName": inputName,
//             "firstName": inputName,
//             "lastName": inputSurname,
//             "email": inputEmail,
//             "privateNumber": "",
//             "password": inputPassword,
//             "active": true})
//     })
//     .then(response => response.json())
//     .then(response => console.log(JSON.stringify(response)))

//     for (let index = 0; index < Users.length; index++) {
//         if ((inputName == Users[index].name) || (inputEmail == Users[index].email)) {
//             // $($("span")[0]).append("Account with that kind of name or email is already existed")
//             alert("Account with that kind of name or email is already existed")
//             check2 = true
//         }
//         if (inputName == "") {
//             check2 = true
//             $($("span")[2]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }

//         if (inputSurname == "") {
//             check2 = true
//             $($("span")[3]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }

//         if (inputEmail == "") {
//             check2 = true
//             $($("span")[4]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }
//         if(inputPassword == ""){
//             check2 = true
//             $($("span")[5]).animate({opacity: "1"})
//             localStorage.removeItem("user")
//         }
//     }

//     if (!check2) {
//         Users.push({name: inputName, surname: inputSurname, email: inputEmail, password: inputPassword})
//         localStorage.setItem("user", JSON.stringify({name: inputName, surname: inputSurname, email: inputEmail, password: inputPassword}))
//         $("span").animate({opacity: "0"})
//         window.open("UserPage.html")
//     }
// })
