//Assignment Operator
//1. Equal/Assignment (=)
// It is used to assign a value to a variable
let variable1=1;
let stringOne="Hello World";
let number1=5.4;
let flag1=true;
let varNULL=null;

//2. Increment/Decrement Operator (++/--)
// There are two type of increment/Decrement Operator
//A. Pre increment/decrement (++i/--i)
// It increase/decrease the value first the perform operation
//Example-1
let i=5;
console.log(++i);  //Output= 6
console.log(i)  // Output=6
//Example-2
let j=9
console.log(--j); //Output= 8
console.log(j) //Output=8
//B. Post Increment/Decrement
// In this case the operation get performaed fist and then the value get increased/decreased
//Example-1
let k=11;
console.log(k++)   //Output=11
console.log(k)   //Output=12
//Example-2
let l=18;
console.log(l--);  //output=18
console.log(l)  // output=17

//3.augmented assignment operators or compound assignment operators


// Mathematical Operators

// 1. Addition
let num1=40;
let num2=41;
let sum=num1+num2;
console.log(sum);

let float1=5.6;
let float2=4.9;
let floatSum=float1+float2;
console.log(floatSum);

let string1='Sambha';
let string2='Sinha';
let concatString=string1+string2;
console.log(concatString);
//This is  known as String Concatination, This is part of string.  '+' is use to concat the string

//2. Substraction
let num3=40;
let num4=41;
let sub1=num4-num3;
let sub2=num3-num4;
console.log(sub1);
console.log(sub2);

//3. Multiplication
let num5=4;
let num6=8;
let product=num5*num6;
console.log(product);

//4. Division
let num7=17;
let num8=4;
let quo=num7/num8;
console.log(quo);

// 5. Modulo Operator (It is used to find the remainder from a division)
let rem=num7%num8;
console.log(rem);

//If you want to get the quotent in integer form, then inbuilt mathematical floor() function can be used
let floorQuo=Math.floor(num7/num8);
console.log(floorQuo);

//6. Exponent function ** (It is used to calculate the power)
let exp1=5;
let exp2=3;
let pow=exp1**exp2;
console.log(pow);

