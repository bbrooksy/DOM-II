// Your code goes here
const navBtns = document.querySelectorAll('.nav-link');
navBtns.forEach((element) => {
element.addEventListener("mouseenter", (event) => {
    if(event.target.style.color === 'aqua'){
        event.target.style.color = 'black'
    } else {
        event.target.style.color = 'aqua';
    }
})          
})

navBtns.forEach((element) => {
element.addEventListener("click", () => {
    element.style.fontSize = '30px'

})          
})
navBtns.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        if(event.target.style.backgroundColor === 'red'){
            event.target.style.backgroundColor = 'white'
        } else {
            event.target.style.backgroundColor = 'red';
        }
    })
})
const images = document.querySelectorAll('img')
images.forEach((element, idx) => {
    element.id = `img-${idx}`
})
const busImg = document.getElementById('img-0')
busImg.addEventListener('dblclick', function(event){
if(event.target.style.transform === 'scale(1.5)'){
    event.target.style.transform = 'none'
} else {
    event.target.style.transform = 'scale(1.5)';
}

})
const midImg = document.getElementById('img-1')
midImg.addEventListener('mouseleave', () => {
    midImg.style.transform = 'scale(.5)';
    midImg.style.transition = 'transform 1s';
})
const advImg = document.getElementById('img-2')
advImg.addEventListener('mousemove', () => {
    advImg.style.transform = 'scale(.5)';
    advImg.style.transition = 'transform 1s';
})
const boatImg = document.getElementById('img-3')
boatImg.addEventListener('mouseup', () => {
    boatImg.style.transform = 'scale(.5)';
    boatImg.style.transition = 'transform 1s';
})
boatImg.addEventListener('mousedown', (event) =>{
    event.target.style.transform = 'rotate(0.5turn)'; 
})

const bottomButs = document.querySelectorAll('.btn')
 bottomButs.forEach(element => {element.addEventListener('click', () => {
         alert('Youre All Set')
 })
})
const body = document.querySelectorAll('body')
body.forEach((element) => {
element.addEventListener('keydown', (event) =>{
    if(event.isComposing || event.key === 'E') {
        alert ('Are you sure')
    }
    })
})
addEventListener('keyup', (event) =>{
    if(event.isComposing || event.key === 'Y') {
        alert ('Youre Booked')
    };
})