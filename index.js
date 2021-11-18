/*let task = prompt ("What is the official name of JavaScript language?", '');

if (task == 'ECMAScript')
{
    alert ('It is right!');
} else
{
    alert ('Do not you know? It is ECMAScript!');
}
*/

/*
let task2 = prompt ('Write a number, please');

if (task2 > 0) {
    alert (1);
} else if (task2 < 0) {
    alert (-1);
} else {
    alert (0);
}
*/

//result = (a+b<4?'few':'many');


/*let message = (login == 'employee')?'hi':
    (login == 'headmaster')?'hello':
        (login == '')?'No login':
            '';
*/

//if (age >=14 && age <= 90){}

/*if (!(age >=14 && age <= 90)){}

if (age < 14 && age > 90){}
*/

/*let result = prompt ('login','');
let password;
console.log(result);

if(!result){
    alert ('canceled');
} else if (result === 'admin') {
    password = prompt ('password','');
    if (password === 'I am main') {
        alert ('hello!');
    } else if (!password) {
        alert ('canceled');
    } else {
        alert ('invalid password');
    }
} else {
    alert ('I do not know you');
}
*/

/*for (let i = 2; i <= 10; i++) {
    if (i%2 === 1) {
    alert (i);
    }
}
*/

/*let i = 0;
while (i < 3) {
    alert (`number ${i}!`);
    i++;
}
*/

/*let result;

while (true) {
    result = prompt ('input n>100','');
    if (!result || result > 100) break;
}*/
/*
do {
    result = prompt ('input n>100');
} while (result <= 100 && result);
*/


/*let n = 10;
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if(i % j === 0){
            isPrime =false;
        }
    }

    if(isPrime){
        console.log(i);
    }
}*/

/*
if (browser === 'Edge') {
    alert ('You have got the Edge!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert ('Okay, we support these browsers too');
} else {
    alert ('We hope that this page looks ok!');
}*/

/*const number = +prompt ('input a number between 0 and 3');

switch (number) {
    case 0:
        alert ('it is 0');
        break;
    case 1:
        alert ('it is 1');
        break;
    case 2:
    case 3:
        alert ('it is 2 or 3');
        break;
}
*/

/*function checkAge (age) {
    age > 18 ? return true : confirm ('Have the parents allowed?');
}

function checkAge (age) {

}
*/



/*function min(a,b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(1,1));
*/


/*let x = prompt ('input x');
let n = prompt ('input n');
let result = 1;

function pow(x,n) {
    for ( let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(x,n));
*/


// let ask = (question, yes, no) =>
//     confirm (question) ? yes() : no();
//
// ask('do you agree?',
//     () => alert ('you have agreed'),
//     () => alert ('you canceled')
// );


/*
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; n++) {
        result *= x;
    }

    return result;
}

let x = prompt ('x?', '');
let n = prompt ('n?', '');

if (n <= 0) {
    alert (`The degree of ${n} is not maintained,
    input integer, that is bigger than 0`);
} else {
    alert ( pow(x, n) );
}
*/



let orange = 15.678;
let banana = 123.965;
let kiwi = 90.2345;

console.log ('min: ' + Math.min(orange, banana, kiwi));
console.log ('max: ' + Math.max(orange, banana, kiwi));



let sum = orange + banana + kiwi;
console.log ('sum: ' + sum);

let sumInt = Math.trunc(orange) + Math.trunc(banana) + Math.trunc(kiwi);
console.log('sumInt: ' + sumInt);

console.log( 'sumHundred: ' + Math.round(sum / 100) * 100);



let okr = Math.floor(sum);
if (okr % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log( 'change: ' + (500 - sum) );

let avg = sum / 3;
console.log( 'avg: ' + avg. toFixed(2) );


let discount = Math.random();
let total = Math.random() * 100;

let customer1 = total  * discount;
console.log(total);
console.log(Math.trunc(discount * 100));
console.log( 'discount: ' + (total - customer1.toFixed(2)) );

let clearProfit = total  / 2 - total  * discount;
console.log( 'clear profit: ' + clearProfit );