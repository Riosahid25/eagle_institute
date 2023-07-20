const dropBtn = document.querySelector('.dropbtn')
const cover = document.querySelector('.dropdown')

dropBtn.addEventListener('click', function (){
    hide(dropBtn)
})

function hide (){
    cover.style.backgroundColor = 'transparent'
    cover.style.zIndex = '-1'
    dropBtn.style.display = 'none'
}