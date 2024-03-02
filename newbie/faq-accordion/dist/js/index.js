// accordion

const btnCollection = document.querySelectorAll(".btn");
const summaryCollection = document.querySelectorAll('.summary')

document.addEventListener("DOMContentLoaded", () => {
  btnCollection.forEach((btn) => {
    
    btn.addEventListener('click',toggleClick)

    // const summary = btn.parentElement.parentElement;

    // if (summary.classList.contains("open")) {
    //   btn.src = "dist/assets/images/icon-minus.svg";
    // } else {
    //   console.log("cerrado");
    //   btn.src = "dist/assets/images/icon-plus.svg";
    // }
  });

})


function toggleClick(e){

  const summary =e.target.parentElement.parentElement

  summaryCollection.forEach( el=>{
    el.classList.remove('open')
  })


  // if(summary.classList.contains('open')){
  //   summary.classList.remove('open')
  // }else{
    summary.classList.add('open')
  // }
}