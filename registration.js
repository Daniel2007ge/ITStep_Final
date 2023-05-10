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
    $.getJSON("data.json",
    function (data) {
        let arr = data.Users
        let input1 = $("input")[0]
        let input2 = $("input")[1]
        for (let index = 0; index < arr.length; index++) {
            if((input1.value==arr[index].name) && (input2.value==arr[index].password)){
                localStorage.setItem("user", JSON.stringify(arr[index]))
                window.open("UserPage.html")
                // if (condition) {
                //     localStorage.setItem("user", JSON.stringify(arr[index]))
                //     window.open("index2.html")
                // }
            }
        }
        window.open("ErorPage.html")
    })
})