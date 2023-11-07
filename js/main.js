class Employee{
    constructor(name,salary){
        this.name=name,
        this.salary=salary
    }
    display(){
        let a=this.salary*12
        console.log(`Your name is ${this.name} your annual salary is ${a} `);
    }
}
class Manager extends Employee{
    constructor(name,salary,department,bonuses){
        super(name,salary)
        this.department=department,
        this.bonuses=bonuses
    }
    display(){
        let ans=this.salary+this.bonuses
        console.log(`your name is ${this.name} and your department is ${this.department} your monthly salary ${this.salary} your total amount is ${ans}`);
    }
}
let employee=new Employee("bala",15000);
employee.display()
let manager=new Manager(" Prabha",15000,"developer",1500);
let manager1=new Manager("karan",20000,"developer",1000);
let manager2=new Manager("kumar",30000,"developer",1500);
manager.display()
manager1.display()
manager2.display()