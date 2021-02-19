let hour = new Date().getHours();
let min = new Date().getMinutes();
let x;
let w = 16;
let h = 16;

function setup() {
    var myCanva = createCanvas(1189, 24);
    myCanva.parent("canva1");
    frameRate(1);
    rectMode(CENTER);

    angleMode(DEGREES);
    colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
    w = 16;
    h = 16;
    //hour++;
    //alert(hour+":"+min);

    if (hour > 5 && hour < 19) {
        if (min < 30) {
            switch (hour) {
                case 6:
                    x = 80;
                    break;
                case 7:
                    x = 180;
                    break;
                case 8:
                    x = 281;
                    break;
                case 9:
                    x = 380;
                    break;
                case 10:
                    x = 380;
                    break;
                case 11:
                    x = 431;
                    break;
                case 12:
                    x = 531;
                    break;
                case 13:
                    x = 631;
                    break;
                case 14:
                    x = 731;
                    break;
                case 15:
                    x = 832;
                    break;
                case 16:
                    x = 932;
                    break;
                case 17:
                    x = 1032;
                    break;
                case 18:
                    x = 1132;
                    break;
                default:
                    h = 0;
                    w = 0;
                    break;
            }
        } else {
            switch (hour) {
                case 6:
                    x = 80 + 50;
                    break;
                case 7:
                    x = 180 + 50;
                    break;
                case 8:
                    x = 281 + 50;
                    break;
                case 9:
                    x = 380;
                    break;
                case 10:
                    x = 380;
                    break;
                case 11:
                    x = 431 + 50;
                    break;
                case 12:
                    x = 531 + 50;
                    break;
                case 13:
                    x = 631 + 50;
                    break;
                case 14:
                    x = 731 + 50;
                    break;
                case 15:
                    x = 832 + 50;
                    break;
                case 16:
                    x = 932 + 50;
                    break;
                case 17:
                    x = 1032 + 50;
                    break;
                default:
                    h = 0;
                    w = 0;
                    break;
            }
        }
        fill(235, 112, 2);
        translate(28, 0);
        noStroke();
        ellipse(x, 16, w, h);
        rect(40 + x / 2, 16, x - 80, 2);
    } else if (hour > 18) {
        fill(235, 112, 2);
        translate(28, 0);
        noStroke();
        rect(606, 16, 1052, 2);
    }
    clean();
}