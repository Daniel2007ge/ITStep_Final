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