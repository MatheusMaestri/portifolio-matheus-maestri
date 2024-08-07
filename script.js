let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

const elementos = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver( (entrou) =>{
    entrou.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

elementos.forEach( (elementos) => myObserver.observe(elementos))

// NO CÓDIGO ABAIXO FAZ O EFEITO DE ESCRITA

document.addEventListener("DOMContentLoaded", function() {
    const spanElement = document.getElementById('animated-span');
    const text = 'Front-End';
    let index = 0;
    let isDeleting = false;
    let delayAfterTyping = 3000; 

    function typeWriter() {
        if (isDeleting) {
            spanElement.innerHTML = text.substring(0, index - 1);
            index--;
            if (index === 1) {
                isDeleting = false;
            }
        } else {
            spanElement.innerHTML = text.substring(0, index + 1);
            index++;
            if (index === text.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, delayAfterTyping);
            }
        }
        setTimeout(typeWriter, isDeleting ? 100 : 200);
    }

    typeWriter();
});