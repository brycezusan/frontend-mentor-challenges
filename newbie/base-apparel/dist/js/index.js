// base appareal app 

const formulario = document.querySelector('.formulario')

document.addEventListener('DOMContentLoaded',()=>{

  formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const data = new FormData(e.target)
    const email = data.get('email')

    
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(!validEmail.test(email)){
      const ocultos = document.querySelectorAll('.hidden')
      ocultos.forEach( oculto=>oculto.classList.remove('hidden'))
      return
    }

    document.querySelector('.mensaje').classList.add('hidden')
    document.querySelector('.icon').classList.add('hidden')
    formulario.classList.add('border')
    

  })
})