for(let i = 1; i <=100; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}
let btn = document.querySelector('.btn');
let randomColorBlock = document.querySelectorAll('.box');
function RandomHexColorCode(){
    let chars = "0123456789abcedef";
    let colorLenght = 6;
    let color = '';
    for(let i = 0; i<colorLenght; i++){
        let randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor,randomColor+1);
    }
    return "#" + color;
}
btn.addEventListener('click',() => {
    randomColorBlock.forEach(e => {
        let newColor = RandomHexColorCode();
        e.style.background = newColor;
        e.innerHTML = newColor;
    })
})