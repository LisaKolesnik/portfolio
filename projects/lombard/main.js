
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

var op;

function func() {
    var result;
    var a = Number(document.getElementById("a").value);
    switch (op) {
        case '375p':
            result = a * 1525;
            break;
        case '-':
            result = a * 2035;
            break;
        case '*':
            result = a * 2380;
            break;
        case '/':
            result = a * 2380;
            break;
        case 'a':
            result = a * 3050;
            break;
        case 'b':
            result = a * 3460;
            break;
        case 'c':
            result = a * 3660;
            break;
        case 'd':
            result = a * 3900;
            break;
        default:
            result = 'выберите пробу';
    }

    document.getElementById("result").innerHTML = result;
}

var op2;

function func2() {
    var result2;
    var a = Number(document.getElementById("ab").value);
    switch (op2) {
        case '+':
            result2 = a * 40;
            break;
        case '-':
            result2 = a * 50;
            break;
        case '*':
            result2 = a * 55;
            break;
        case '/':
            result2 = a * 60;
            break;

        default:
            result2 = 'выберите пробу';
    }

    document.getElementById("result2").innerHTML = result2;
}

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
function myFunction2(x) {
    x.classList.toggle("change");
}