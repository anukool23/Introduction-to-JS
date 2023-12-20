// type of variable is used to get the data type ofa variable.

var number=56;
console.log(typeof number);
//typeof will give datatype as number

number=67.8;
console.log(typeof number);
//typeof will give datatype as number


number=true;
console.log(typeof number);
//the value of variable get changed to boolean from number, datatype also get changed.  typeof will give datatype as boolean

var countOfChildren=null;
console.log(typeof countOfChildren);
//typeof will return as Object, which is going on from very begunning. This is incorrect but JS has still not changed it.

var firstName='Anukool';
console.log(typeof firstName);
//it will print as string

var color;
console.log(typeof color);
//it will print as undefined

color='blue';
console.log(typeof color);
//it will print string, the the variable value changed to string from undefined.
