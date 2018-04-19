import '../css/index.css';
import Icon from '../images/temp.jpg';


function createElement(){
    var ele = document.createElement("div");
    ele.innerHTML = "idsaasdfd  sfweb  pack";
    ele.classList.add("hello");

    var img = new Image(10, 10);
    img.src = Icon;
    ele.appendChild(img);
    return ele;
}

document.body.appendChild(createElement());