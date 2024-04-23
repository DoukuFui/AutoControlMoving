var direction = 0;
var isMoving = true;
const toggleButton = document.getElementById('toggleButton');


function toggleMoving() {
    isMoving = !isMoving;
    toggleButton.textContent = isMoving ? "Dừng" : "Tiếp";
    if (isMoving) {
        freeMoving(direction);
    }
}

function controlMoving(move) {
    switch (move){
        case 0:
            direction = 0;
            break;
        case 1:
            direction = 1;
            break;
        case 2:
            direction = 2;
            break;
        default:
            direction = 3;
            break;
    }
}

function freeMoving(){
    var top = parseInt(document.getElementById("hero").style.top);
    var left = parseInt(document.getElementById("hero").style.left);
    var widthSize = document.getElementById("hero").style.width;
    var heightSize = document.getElementById("hero").style.height;
    console.log(left);
    console.log(widthSize);
    if (isMoving) {
        switch (direction) {
            case 0:
                if (left < window.innerWidth - widthSize) left += 10;
                break;
            case 1:
                if (top < window.innerHeight - heightSize) top += 10;
                break;
            case 2:
                if (left > 0) left -= 10;
                break;
            default:
                if (top > 0) top -= 10;
                break;
        }
        console.log(left);
        console.log(widthSize);
        document.getElementById("hero").style.left = left + "px";
        document.getElementById("hero").style.top = top + "px";
        setTimeout(freeMoving, 200);
    }
}

freeMoving();