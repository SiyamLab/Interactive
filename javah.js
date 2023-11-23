var Interactive = [1, 2, 3, 4, 5]

function Interactive1(){
    document.getElementById("result").innerHTML = "You have selected " + Interactive[0] + " out of 5"
    document.getElementById("b1").style.backgroundColor = "#7c8898"
    document.getElementById("b2").style.backgroundColor = "#262f38"
    document.getElementById("b3").style.backgroundColor = "#262f38"
    document.getElementById("b4").style.backgroundColor = "#262f38"
    document.getElementById("b5").style.backgroundColor = "#262f38"
}

function Interactive2(){
    document.getElementById("result").innerHTML = "You have selected " + Interactive[1] + " out of 5"
    document.getElementById("b1").style.backgroundColor = "#262f38"
    document.getElementById("b2").style.backgroundColor = "#7c8898"
    document.getElementById("b3").style.backgroundColor = "#262f38"
    document.getElementById("b4").style.backgroundColor = "#262f38"
    document.getElementById("b5").style.backgroundColor = "#262f38"
}

function Interactive3(){
    document.getElementById("result").innerHTML = "You have selected " + Interactive[2] + " out of 5"
    document.getElementById("b1").style.backgroundColor = "#262f38"
    document.getElementById("b2").style.backgroundColor = "#262f38"
    document.getElementById("b3").style.backgroundColor = "#7c8898"
    document.getElementById("b4").style.backgroundColor = "#262f38"
    document.getElementById("b5").style.backgroundColor = "#262f38"
}
function Interactive4(){
    document.getElementById("result").innerHTML = "You have selected " + Interactive[3] + " out of 5"
    document.getElementById("b1").style.backgroundColor = "#262f38"
    document.getElementById("b2").style.backgroundColor = "#262f38"
    document.getElementById("b3").style.backgroundColor = "#262f38"
    document.getElementById("b4").style.backgroundColor = "#7c8898"
    document.getElementById("b5").style.backgroundColor = "#262f38"
}
function Interactive5(){
    document.getElementById("result").innerHTML = "You have selected " + Interactive[4] + " out of 5"
    document.getElementById("b1").style.backgroundColor = "#262f38"
    document.getElementById("b2").style.backgroundColor = "#262f38"
    document.getElementById("b3").style.backgroundColor = "#262f38"
    document.getElementById("b4").style.backgroundColor = "#262f38"
    document.getElementById("b5").style.backgroundColor = "#7c8898"
}

function Submit(){
    document.getElementById("box").style.display = "none"
    document.getElementById("box1").style.display = "block"
}