/* 
var num;

do{
    num = prompt('Input number')
    for (let i = 0; i< 100; i++ ){
        if (onluq != teklik){
            alert ('ededlerin reqemleri ferqlidir')
        }
        else {
            alert ('ededlerin reqemleri ferqli Deyil')
        }
    }
}
while(isNaN(num)) {
    alert ('Input RIGHT number');
} */


/* // TASK 1
var num = prompt();

let teklik = num % 10;
let onluq = (num - teklik) / 10;

if (num > 9 && num < 100) {
    if (onluq != teklik){
        alert ('ededlerin reqemleri ferqlidir');
    }
    else {
        alert ('ededlerin reqemleri ferqli Deyil');
    }
}
else {
    alert ('Input RIGHT number');
} */

/* // TASK 2
var num = prompt();

let a = num % 10;
let b = ((num-a)/10) % 10;
let c = (((num-a) / 10  -b) / 10) % 10;
let d = (((num - a)/10 - b)/ 10 -c) / 10;

if (num>999 && num<10000) {
    alert (a+b+c+d);
}
else  {
    alert ('Input right number')
} */

/* // TASK 3
var DayInMonth = prompt();

if (isNaN){
    switch (DayInMonth) {
        case 'yanvar':
        case 'mart' :
        case 'may' :
        case 'iyul' :
        case 'avqust' :
        case 'oktyabr' :
        case 'dekabr' :
            alert ('31 gunden ibaretdir');
            break;
        
        case 'aprel' :
        case 'iyun' :
        case 'sentyabr' :
        case 'noyabr' :
            alert ('30 gunden ibaretdir');
            break;
        
        case 'fevral' :
            alert ('28/29 gunden ibaretdir');
            break;
    
        default:
            alert ('duzgun yazin');
            break;
    }
}
else {
    alert ('Her hansi bir ay');
} */

