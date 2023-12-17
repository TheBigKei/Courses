//Task 1
console.log("Start of the task 1");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("End of the task 1\n ");

//Task 2
console.log("Start of the task 2");

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

console.log("End of the task 2\n ");

//Task 3
console.log("Start of the task 3");

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("End of the task 3\n ");

//Task 4
console.log("Start of the task 4");

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

console.log("End of the task 4\n ");

//Task 5
console.log("Start of the task 5");

let arr5 = [2, 5, 9, 15, 1, 4 ];

for(let i = 0; i < arr5.length; i++){
    if(arr5[i]> 3 && arr5[i] < 10){
        console.log(arr5[i]);
    }
}

console.log("End of the task 5\n ");

//Task 6
console.log("Start of the task 6");

let arr6 = [2, 5, 9, 3, 1, 4];
let prod = 1;
for(let i = 0; i<  arr6.length; i++){
    prod *= arr6[i];
}

console.log("Product = " + prod);

console.log("End of the task 6\n ");

//Task 7
console.log("Start of the task 7");

let arr7 = [1, 2, 3];

for(i = 0; i < arr7.length; i++){
    console.log(arr7[i]);
}

console.log("End of the task 7\n ");

//Task 8
console.log("Start of the task 8");

let arr8 = [1, 2, 3];
let sum = 0;
for(let i = 0; i < arr8.length; i++){
    sum += arr8[i];
}

console.log('Sum = ' + sum)

console.log("End of the task 8\n ");

//Task 9
console.log("Start of the task 9");

let arr9 = [1, -99, 'a', 79, 'mmm, monkey']

arr9Last = arr9[arr.length - 1]
console.log('Last value of arrey = ' + arr9Last)

console.log("End of the task 9\n ");

//Task 10
console.log("Start of the task 10");

let arr10 = [2, 5, 9, 3, 1, 4];
let prod10 = 1;
for(let i = 0; i<  arr10.length; i++){
    prod10 *= arr10[i];
}

console.log("Product = " + prod10);

console.log("End of the task 10\n ");

//Task 11
console.log("Start of the task 11");

let weekdays = {
    1:'Monday',
    2:'Tuesday' ,
    3:'Wednesday' ,
    4:'Thursday',
    5:'Friday',
    6:'Saturday',
    7:'Sunday'
};

console.log('Weekdays:');
for(let key in weekdays){
    console.log(weekdays[key]);
}

console.log("End of the task 11\n ");

//Task 12
console.log("Start of the task 12");

let obj12 = {
    a: 1,
    b: 2, 
    c: 3, 
    d: 4, 
    e: 5
}

for(let key in obj12){
    if(obj12[key] % 2 !==0){
        console.log(obj12[key]);
    }
}

console.log("End of the task 12\n ");

//Task 13
console.log("Start of the task 13");

let months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

console.log('Months of the year:')
for(let key in months){
    console.log(months[key]);
}

console.log("End of the task 13");