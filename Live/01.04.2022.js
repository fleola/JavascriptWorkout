let number = 3  //number
const name = 'Marco' //string

let av = {
    firstName: "Luca",
    lastName:'Rossi',
    age: 23
}

let a = 0

function sum(param1, param2){
    //in scope
    a = 8
    return param1 + param2 + a
}

const sum_ = (param1, param2) => {
    //in scope
    const a = 4
    return param1 + param2 + a
}

let dato = 'lorenzo'
let dato2 = 23

function tester(param1, param2){
    if( (param1 === 'lor'  param2 !== '23')  param2 < 30){
        console.log('il parametro era vero ')
    }else{
        console.log('il parametro era falso ')
    }
}



let myArray = [
    {
        user:'marco',
        mail:'mail@mail',
        age:3
    },
    {
        user:'marco',
        mail:'mail@mail',
        age:3
    },
    {
        user:'marco',
        mail:'mail@mail',
        age:3
    }
]

 // leap year live
 //create my function

 function test(){
     console.log('ok')
 }


 const leapYearFinder = (year, param) => {
     if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
         return param
     }else{
        console.log('non bisestile')
     }
 }

 leapYearFinder(2008, test())

 //myArray[1, 2, 4, 10, 6] => 1, 2, 4, 23, 76  arr.len / 2



//operatori logici AND, OR, XOR

// AND

/* 0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1 /

//OR

/ 0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1 /

//XOR bit diversi fra loro 

/ 0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0 */








//ES6+ 

//const test = (param1, param2, param3) => param1 + param2 + param3
