const slides = document.querySelectorAll('.slide')

for (let slide of slides){
  slide.addEventListener('click', ()=>{
    clearActive()
    slide.classList.add('active')
  })
}


function clearActive(){
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}