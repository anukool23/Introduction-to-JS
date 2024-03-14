class student{
    constructor(name,standard,course,schoolName){
        this.name=name;
        this.standard=standard;
        this.course=course;
        this.schooName=schoolName;
    }
    printName(){
        console.log(this.name)
    }
}

const student1=new student("Rohit","B.Tech","CSE","HRIT")
console.log(student1)
student1.printName();
