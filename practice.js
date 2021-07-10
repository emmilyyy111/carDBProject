//write a javascript function to get the first element of an array
const cars = [['corvette', 'bmw'],['mazda','lexus']]
// const length = '[cars.length-1']
// function fArray (){
//     const name = cars [0][0][0]
//     return name
// }
// console.log (fArray(cars))

// function that returns last element in an array
// function getLastFile(value){
//     return cars[cars.length-1][cars[cars.length-1].length-1]
//         }
// console.log(getLastFile(cars))

// function to get a given element of an array passed as a parameter
// const numb = [[12, 18],[9, 3, 6],[8, 1, 2]]
function getElementPassed(a,b){
    return cars[a][b]
}
const item1 = 0
const item2 = 1
console.log (getElementPassed(item1, item2))

// create a function to get the index of an element in an Subarray where its element matches a value passed as a parameter

// function getIndex(){
//     for(let i = 0; i < cars.length; i++){
//     if (cars[i] === i) {
//         return i
//     }
//     }
// }
// const value = 2
// console.log(getIndex(value))

// function getIndexByValue(element) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === element) {
//         return i
//       }
//     }
//   }
//   const elementValue = 'lexus'
//   console.log(getIndexByValue(elementValue))