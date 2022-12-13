//1 blow programme in annoymous function &IIFE
//a. print the odd in array
//var odd = function(arr){
  //var result=[];
  //for(var i=0;i<arr.length;i++){
    //if(arr[i]%2==0){
      //result.push(arr[i]);
    //}
  //}
  //return result;
//}
//ar arr = [1,2,12,14,10,8,16,16,20,21]
//console.log(odd(arr));
//-------------------------------------------------------------------------------
//b.converts all strings to little caps in string array
 
//const arr = ['ONE', 'TWO', 'THREE'];

//const lower = arr.map(element => {
  //return element.toLowerCase();
//});

//console.log(lower); 
//--------------------------------------------------------------------

 //c. Sum of all numbers in array
 //function sumArray(array) {
  //let sum = 0;

  //for (const item of array) {
  //  sum += item;
  //}
  
  //return sum;
//}
//sumArray([1, 4, 0, 9, -3])
//console.log(sum);;
//----------------------------------------------------------------------
// d.prime number
//var num =function(a){
  //a =a.filter((ele)=>{
    //for(var i=2;i<=Math.sqrt(ele);i++){
      //if(ele%i===0)return false
    //}
    //return true;
  //})
  //return a;
//}
//console.log(num([2,3,4,5,6,7,8,9]));
//------------------------------------------------------------------------------

//e.retun all polydromes in an array

//function isPalindrome(word) {
  //const firstHalf = word.slice(0, Math.ceil(word.length/2));
  //const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

  //return firstHalf === secondHalfReversed;
//}

//function getPalindromesFromArray(arr) {
  //return arr.filter(isPalindrome);
//}

//const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

//console.log(getPalindromesFromArray(wordsArr));
//----------------------------------------------------------------------------


//f.return median of two sorted array of the same size

//var median=function(arr){
 // var mid = Math.floor(arr.length / 2),
   // nums = [...arr].sort((a, b) => a - b);
  //return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
//};
//ar arr=([1,2,3,4,5,7,8,9,10);
//console.log(median(arr));

//---------------------------------------------------------------------
//g. remove duplicates elements from the array

//var removeDuplicates= function (arr) {
//return [...new Set(arr)];
//}
//var arr = [1,2,3,1,2,1,4,5,6,3,5];
//console.log(removeDuplicates(arr));
//----------------------------------------------------------------------
//h. rotate array k times
//var rotate= function(a,k){
  //for(var i=0;i<k;i++){
   // a.unshift(a.pop())
  //}
  //return a;
//}
//console.log(rotate([1,2,3,4,5],3)
//-------------------------------------------------------------------------------------
//2.arrow function
//a.print odd numbers in array
//const numbers = [8, 19, 5, 6, 14, 9, 13];
//const odd = numbers.filter((num) => num % 2 ==0);
//console.log(odd); 
//--------------------------------------------------------------------------------------
//b.converts all the string to little caps in a string array
//const arr = ['ONE', 'TWO', 'THREE'];

//const lower = arr.map(element => {
  //return element.toLowerCase();
//});

//console.log(lower); 
//----------------------------------------------------------------------
//c.sum of all number in an array
//const array = [10, 20, 30, 40];
//const add = (a, b) => a + b
//const result = array.reduce(add);

//console.log(result)
//-----------------------------------------------------------------------------------
//d.return all the prime number in an array
//var num =function(a){
  //a =a.filter((ele)=>{
    //for(var i=2;i<=Math.sqrt(ele);i++){
      //if(ele%i===0)return false
    //}
    //return true;
  //})
  //return a;
//}
//console.log(num([2,3,4,5,6,7,8,9]));
//-------------------------------------------------------------------------
//e.return all polyndromes in an array
//let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
//let palindromes = arr.filter(w => {
  //let len = w.length;
  //for (let i = 0; i < len / 2; i++) {
    //if (w[i] == w[len - i - 1]) {
    //  return true;
    //} else {
      //return false;
    //}
  //}
//});
//console.log(palindromes)
