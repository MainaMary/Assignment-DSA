const leastCommonMultiple=(n1, n2) =>{
 let largest = Math.max(n1, n2)
 let smallest = Math.min(n1, n2)

 //Loop till you find a number by adding the largest number which is
 //divisible by the smallest number
 let i = largest;

 while(i % smallest !==0 ){
     i += largest
 }

 //return the number

 return i
}
//Taking an input from the user
const firstVal  = parseInt(prompt('Enter the first number'));
const secondVal = parseInt(prompt('Enter the second number'));
console.log(leastCommonMultiple(firstVal, secondVal))