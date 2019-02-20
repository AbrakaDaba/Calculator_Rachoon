

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

// making calculator buttons
for (i = 0; i < s; i++) {
    var numKey = document.createElement("span");
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
}

$("span").click(calculation);



function calculation() {
    display += $(this).text();
    $(input).val(display);
    // if there is some mark typed, it can be typed again. No other mark can be typed after mark, only after number.
     if ($(this).text() == "=" ||$(this).text() == "." || $(this).text() == "+" || $(this).text() == "-" || $(this).text() == "*" || $(this).text() == "/") {
        if (Number.isInteger(parseInt(display[display.length - 2]))) {
            $(input).val(display);
        } else {
            display = display.slice(0, (display.length - 2));
            $(input).val(display += $(this).text());
        }
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

    // "+/-" button functionality
    if ($(this).text() == "+/-") {
        display = display.slice(0, (display.length - 3));
        if (display[0] == "-") {
            display = display.slice(1);
            $(input).val(display);
        } else {
            display = "-" + display;
            $(input).val(display);
        }
    }

}
