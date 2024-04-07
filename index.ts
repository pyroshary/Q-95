 function filterGreator(number:number[]):number []
 {
    return number.filter(number=> number >10 )
 }

 const numbers:number[] = [4,13,12,5,16,78,0,89]

 console.log(filterGreator(numbers))