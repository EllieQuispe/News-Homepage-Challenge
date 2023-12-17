const menuIcon = document.getElementById('menuIcon');
const closeMenuIcon = document.getElementById('closeMenuIcon');
const screenWidth = document.querySelector('.grid-container')



function openMenu(){
    document.querySelector('nav').classList.add('active')
    screenWidth.classList.add('screenFixed')
}

function closeMenu(){
    document.querySelector('nav').classList.remove('active')
    screenWidth.classList.remove('screenFixed')
}

function mobileScreen(){
    const newScreenSize = screenWidth.clientWidth

    if(newScreenSize > 918.77){
        document.querySelector('nav').classList.remove('active')
        screenWidth.classList.remove('screenFixed')
    }

}
setInterval(mobileScreen, 2000)

menuIcon.addEventListener('click', openMenu)

closeMenuIcon.addEventListener('click', closeMenu)