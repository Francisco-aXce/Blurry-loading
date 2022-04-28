const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let interval = setInterval(blury, 30);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blury(){
    load++;

    if(load > 99) clearInterval(interval);

    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}