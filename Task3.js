//Task 1
const myArr = [45, 56, 34, 55, 25, 18, 2]

function getMinOfArray(arr){
    let arrMin = (a,b) =>{
        return a - b
    }
    arr.sort(arrMin)

    return arr[0]
  
}

console.log(getMinOfArray(myArr))
//Some changes was approoved 

//Task 2
const myArr1 = [45, 34, 56, 77, 55, 25, 18, 2]

function getMaxOfArray(arr1) {

    let arrMin2 = (a,b) =>{
        return -a + b
    }
    arr1.sort(arrMin2)
    console.log(arr1[0])
}

getMaxOfArray(myArr1)


//Task 3 
const myArr3 = [45, 34, 56, 77, 55, 25, 18, 2]
function getMaxIndexOfArray(arr){
    
   
    return arr.indexOf(Math.max.apply(null, arr))
     
     
}

console.log(getMaxIndexOfArray(myArr3))


//Task 4
function getMinIndexOfArray(arr){
    
   
    return arr.indexOf(Math.min.apply(null, arr))
     
     
}

console.log(getMinIndexOfArray(myArr3))



//Task 5
const myArr4 = [45, 34, 56, 77, 55, 25, 18, 2]

function getSumOfOdd(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++){
        if(i % 2 == 1){
           sum += arr[i]
           
        }
    }
    
   return console.log(sum)
}

getSumOfOdd(myArr4)



//Task 6

const myArr5 = [45, 34, 56, 77, 55, 25, 18, 2]

function arrReverse(arr){
    return arr.reverse()
} 

console.log(arrReverse(myArr5))

//Task 7

function countOfOdd(arr){
    let sum = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            sum += arr[i]
        }
    }   
    console.log(sum)
}

countOfOdd(myArr5)
