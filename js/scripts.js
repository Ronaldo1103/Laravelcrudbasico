const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})
function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
    console.log(button)
}