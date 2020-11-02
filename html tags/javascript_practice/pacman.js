const square = Array.from(document.querySelectorAll(".grid div"))
console.log(square)

for (let i=0; i<square.length; i++){
   if(i % 2 === 0){
       square[i].classList.add('even')

   }
   else square[i].classList.add('odd')
   
}