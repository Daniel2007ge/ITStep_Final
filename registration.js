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
    $.get("data.js",
    function () {
        let arr = Users
        let input1 = $("input")[0]
        let input2 = $("input")[1]
        for (let index = 0; index < arr.length; index++) {
            if((input1.value==arr[index].name) && (input2.value==arr[index].password)){
                localStorage.setItem("user", JSON.stringify(arr[index]))
                window.open("UserPage.html")
            }
        }
        window.open("ErorPage.html")
    })
})

$("#signup").click(function () {
    let inputName = $("input")[2].value
    let inputEmail = $("input")[3].value
    let inputPassword = $("input")[4].value
    let Role = document.getElementsByTagName("select")[0].value
    $.get("data.js",
        function () {            
            if ((inputName == "") && (inputEmail == "") && (inputPassword == "")) {
                alert("fill the gaps")
            }else {
                Users.forEach(element => {
                    if ((inputName == element.name) && (inputEmail == element.email)) {
                        alert("Account with that kind of name or email is already existed")
                    }else {
                        Users.push({"name":inputName,"role":Role,"email":inputEmail,"password":inputPassword})
                        localStorage.setItem("user" + (Users.length + 1), JSON.stringify({"name":inputName,"role":Role,"email":inputEmail,"password":inputPassword}))
                        console.log(Users)
                    } 
                });
            }
        },
    );
});