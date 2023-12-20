/* 
Naming Convention
1. Variables follows camel convention
    Example:- firstName, lastName, ageSarah
2. Variables name can contains letters, number, _ and $
3. variables name can only start with letters, _ and $
4. Variables names cannot contains reserved keywords


Types of variables
1. Let:- The value of the variable can be changed at any point of time. 
This is locally accessible. These have scope within block.

2. Const:- Once a value get assigned to variable cannot be changed later.
 The value need to be assigned at the time of declaration of the variable.

 3. Var:- The value of the variable can be changed at any point of time. 
This is globally accessible. These have scope outside the block as well.



Datatypes
1. Number:- Floating point number, Use for decimals and integers.  (let age=28)

2. String:- Sequence of characters, use for text (let name="Sarah")

3. Boolean:- Logical type that can only be true or false, Used for taking decisions. (Let result=true)

4. Undefined:- Variable only declared, not initalized with value. (let countOfChildren)

5. Null:- Variable is inatilized with null also means empty value (let var=null)

*/

//Naming of variables
let number; //This is OK
let print;  //This is not correct way as, print is reserved keyword of JS
let countOfChildren;  //This is perfet, as we are able to understand the meaning of variable

//Types of variable
let numberOfKites;  //The variable can be initalized with declaration of later as well
var numberOfDogs;  //The variable can be initalized with declaration of later as well
const numberOfStudents=56;  //The variable need to initalized with declaration of variable only, value cannot be canged once initalized.

//Datatype
//Number
let numberInteger=56;
let numberFloat=67.8;

//String
let firstName='Sarah';
let fullName="Sarah Gupta";

//boolean
let result=true;
let twist=false;

//undefined
let countOfBunch;

//Null
let count=null;
let update=null;
