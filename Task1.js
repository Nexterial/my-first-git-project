//Условные операторы
//Task 1

function myFunction(a,b){
    if(a % 2 == 0){
        console.log(a * b)
    } else {
        console.log(a + b)
    }
}
myFunction(5,2)


//Task 2

function findQuarter(x,y){
    if(x < 0 && y > 0){
        console.log('1-я четверть')
    } else if(x > 0 && y > 0){
        console.log('2-я четверть')
    } else if(x < 0 && y < 0){
        console.log('3-я четверть')
    } else if(x > 0 && y < 0){
        console.log('4-я четверть')
    } else {
        console.log('Точка принадлежит оси кординат')
    }
}

findQuarter(-2,-4) //3-я четверть

findQuarter(4,4) //2-я четверть

findQuarter(0,3) // Точка принадлежит оси кординат

//Task 3


const myArr = [-2, 10, 15, 20, -45]

function sumPositive(arr){
    let sum = 0
  for( let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i]
    }
  }
  console.log(sum)
}


sumPositive(myArr) //45

//Task 4

function findMax(a,b,c) {
    let multOf = a * b * c
    let sumOf = a + b + c
    if(multOf > sumOf){
        console.log(multOf + 3)
    }else {
        console.log(sumOf + 3)
    }
}

findMax(4,2,1) //11

findMax(1,1,1) //6