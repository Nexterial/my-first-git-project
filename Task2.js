//Task 1 

function myFunction(a,b) {
    let sum = 0
    let counter = 0
    for( i = a; i <= b ; i++){
        if(i % 2 == 0){
           sum += i
           counter++ 
           
        }
    }
    console.log(sum) // сумма четных чисел
    console.log(counter) //Количество четных чисел
}

myFunction(2,10)


//Task 2 

function isPrime(num) {
    for(let i = 1 ; i < num ; i++)
    if(num % 1 == 0){
        return console.log(false)
    }
    return console.log(true)
}

isPrime(6)


//Task 3

function getSqrtBySequentialSelection(number){
    for(let i = 0;  i <= number; i ++){
        if(i * i == number){
            console.log(i)
        }
    }
}

getSqrtBySequentialSelection(25) /// Метод последовательного подбора

function getSqrtByBinarySearch(number){

}
//................


//Task 4

function getFactorial(n){
   if(n === 0) {
    return 1
   }
   return n * getFactorial(n - 1)
}

console.log(getFactorial(4))// 24

console.log(getFactorial(5))// 120


//Task 5

function digitSum(y){
       return y.toString().split('').reduce((a, b) =>{
        return +a + +b
       })
}

console.log(digitSum(555)) // 15
console.log(digitSum(1234))// 10