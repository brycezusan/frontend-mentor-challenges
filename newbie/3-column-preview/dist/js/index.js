// 3 column cards preview

const btnCollection = document.querySelectorAll('.card .cta')
const cardsCollection = document.querySelectorAll('.card')

document.addEventListener('DOMContentLoaded',()=>{
  console.log(btnCollection)

  btnCollection.forEach( el=>{
    el.addEventListener('click', toogleLearn)
  })

})

function toogleLearn(e){
  const contenedor = e.target.parentElement
  console.log(contenedor)
  cardsCollection.forEach( el=>{
    el.classList.remove('open')
  })

  contenedor.classList.add('open')

}