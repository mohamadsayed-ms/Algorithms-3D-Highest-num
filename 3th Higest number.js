/*3rd Highest Number in Array
Having an array of numbers, write an algorithm that will return the 3rd highest number in the array.
 Your algorithm should do only one iteration of the array (just one for/while loop).

Example:

Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11
*/
const array = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
var a =0
var b =0
var c =0
for(var i=0; i< array.length; i++){
    if(array[i]>a){
        a=array[i]
    }
}
for(var i=0; i < array.length; i++){
    if(array[i]>b && array[i]<a){
        b=array[i]
    }
}
for(var i=0; i<array.length; i++){
    if(array[i]>c && array[i]<b){
        c=array[i]
    }
}
console.log( c);