const iicon = document.getElementsByClassName('bar')[0]
const navlinks = document.getElementsByClassName('links')[0]

iicon.addEventListener('click', () =>{
    navlinks.classList.toggle('active')
})
