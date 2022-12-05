/*For the functionality for the progress steps, 
the user needs to be able to click on the next button & the progress should 
move from one circle to the next.
The same applies for the Previous button.
If user clicks on the previous button, the progress line should move back to the previous circle*/

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1 //This represents whichever circle is active

// Below is the functionality for the next button
next.addEventListener('click', () => {
    currentActive++ //current active gets incremented by 1

    /* Should the user continue clicking and the progress gets to circle 4
    it should no longer progress, therefore we need a limitation*/
   if(currentActive > circles.length){
        currentActive = circles.length
   } 

   update()

})

// Below is the functionality for the previous button
prev.addEventListener('click', () => {
    currentActive-- //current active gets decremented by 1

    /* Should the user click the previous button the progress line should move
     back to the previous circle, but not exceed circle 1*/
   if(currentActive < 1){
        currentActive = 1
   } 

   update()


})

function update(){
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length  -1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    
}