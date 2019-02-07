// console.log($("#para"));

// $("#btn1").click(function(){
//     $("#para").text("content").toggle();  

// });

var symbols = ["c", "+/-", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."]
var display = "";
var s = symbols.length;

var calc = $('<div>', {
    id: "calc"
}).appendTo('body');
var numeric = document.createElement("DIV");
var input = document.createElement("INPUT");
var brand = document.createElement("p");

calc.append(brand);
calc.append(input);
calc.append(numeric);
$(document.body).append(calc);

$(brand).text("Rachoon");

symbols.forEach(function (el) {
    console.log(typeof (el));
    if (typeof (el) !== "number") {
        console.log(el);

    }
})

// making calculator buttons
for (i = 0; i < s; i++) {
    var numKey = document.createElement("span");
    console.log(numKey);
    numKey.innerText = symbols[i];
    numeric.append(numKey);
    if (numKey.innerText == "=") {
        $(numKey).css({
            "height": "93px",
            "position": "absolute",
            "background": "linear-gradient(rgb(255, 145, 26) 0%, rgb(251, 175, 93) 45%, rgb(241, 130, 0) 55%, rgb(214, 109, 0) 100%)",
            "line-height": "92px"
        });
    };
    if (numKey.innerText == "0") {
        $(numKey).css({
            "width": "92px"
        });
    };
    if (typeof ($(numKey).text()) !== "number") {
        console.log($(numKey), typeof(($(numKey).text()*0)));

    }

}

$("span").click(calculation);



function calculation() {
    display += $(this).text();
    $(input).val(display);

    if (typeof ($(this).text()) !== "number") {
        console.log(typeof (($(this).text())));

    }

    // "=" button functionality
    if ($(this).text() == "=") {
        display = display.slice(0, (display.length - 1));
        display = eval(display);
        $(input).val(eval(display));
    }

    // "C" button functionality
    if ($(this).text() == "c") {
        display = display.slice(0, (display.length - 2));
        $(input).val(display);
    }

       // "C" button functionality
       if ($(this).text() == "+/-") {
        display = display.slice(0, (display.length - 3));
        $(input).addClass("negative");
        $(input).val(display);
    }

}