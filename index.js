//Assignment 1

let array1=[2,4,5];
let array2=[3,5,6,7];
let array3 = [12,9]

function printSum(array){
    let sum = 0;
    for (let i =0; i<array.length; i = i + 1){
        sum = sum + array[i];
    }
   return sum 
}
let val = printSum(array1);
console.log(val);



//Asssignment 2
let point = [];
let alicePoint = 0;
let bobPoint = 0;
let alice = [57,72,81];
let bob = [73,53,65];

function compareChallenge(alice,bob){
    for (let i=0; i<3;i++){
        if(alice[i]>bob[i]){
            alicePoint++
            alert('alice has one point')
            console.log(`alicepoint ${alice[i]} is greater than bobpoint${bob[i]}`);
        } else if(bob[i]>alice[i]){
            bobPoint++
           alert('bob has one point')
           console.log(`bobpoint ${bob[i]} is greater than alicepoint${alice[i]}`);
        }else{
            alert('both has equal point')
            console.log(`alice and bob have equal point ${alice[i]}`)
    
        }  
    }
    point = [`alicePoint:${alicePoint}, bobPoint:${bobPoint}`];
    return point;

}
compareChallenge(alice,bob)
console.log(point)



//Assignment 3
let arrayNum = [3,5,-6,0,-3,0,0,9,0];
let positive = 0;
let negative = 0;
let zero = 0;
let posNo;
let negNo;
let zeroNo;

function arrayInteger(array){
    for(let i=0;i<array.length;i++){
        if (array[i] > 0){
            positive++;
        }else if(array[i]<0){
            negative++;
        }else{
            zero++
        }
    }
    posNo = positive/array.length;
    negNo = negative/array.length;
    zeroNo = zero/array.length;
    return;    
}
arrayInteger(arrayNum)

console.log(posNo.toFixed(4));
console.log(negNo.toFixed(5));
console.log(zeroNo.toFixed(3));


//Assignment 4
function firstFunction(num1,num2){
    return num1 + num2
}

console.log(firstFunction(2,6))