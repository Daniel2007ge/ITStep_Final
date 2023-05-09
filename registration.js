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

let x = false
function func2(img) {
    if(x == false){
        img.previousElementSibling.type = "text"
        img.src = "images/eye1.png"
        x = true
    }else{
        img.previousElementSibling.type = "password"
        img.src = "images/eye2.png"
        x = false
    }
}