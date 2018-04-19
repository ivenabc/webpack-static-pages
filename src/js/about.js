
function createElement(){
    var ele = document.createElement("div");
    ele.innerHTML = "about webpack";
    ele.classList.add("hello");

    return ele;
}

document.body.appendChild(createElement());