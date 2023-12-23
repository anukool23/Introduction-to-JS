// Patterns

//1. Print Below pattern 

/*   *****
     *****
     *****              
     *****
     *****   
     
     In the above pattern num=5,  num is number of rows and column, number of rows and column will always be equal in this pattern
     */

     let num1=5
     for(let i=0;i<num1;i++){
        let str="";
        for(let j=0;j<num1;j++){
            str += "*"
        }
        console.log(str);
     }



// 2. Print below pattern

/*  12345
    12345
    12345
    12345
    12345   

    In the above pattern num=5,  num is number of rows and column, number of rows and column will always be equal in this pattern
     */

    let num2=5
     for(let i=1;i<=num2;i++){
        let str="";
        for(let j=1;j<=num2;j++){
            str += j;
        }
      
        console.log(str);
     }


//3. Print Below pattern
/*   *_*_*_
     *_*_*_
     *_*_*_
     *_*_*_
     *_*_*_   */

    let num3=6;
    for(let i=1;i<=num3;i++){
        let str="";
        for(let j=0;j<=num3;j++){
            if(j%2==0){
                str += "_"
            }
            else{
                str += "*"
            }
            
        }
        console.log(str);
    }
