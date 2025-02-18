//Task 1: Creating an Employee Class
class Employee {    //This is assigning a class to store Employee information to retrieve later 
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails(){  //Get Details function let us use the information provided when it is called to store it to the class "Employee" and display it properly
        return (`Employee Name: ${this.name}\n Employee ID: ${this.id}\n Department: ${this.department}\n Salary: $${this.salary}`);
    
    }
    calculateAnnualSalary(){   //Use this function to calculate the annual salary using the information stored in the class and return the total to where it's called
        return (`Annual Salary: $${this.salary*12}`);
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);  //Store the new employee info into the Employee class with its labels 
console.log(emp1.getDetails());  //Instantiate the employee object and log the details to the console

console.log(emp1.calculateAnnualSalary()); //Instantiate the annual salary and log the details to the console


//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee{  //Create class Manager that extends from class Employee
    constructor(name, id, department, salary, teamSize){
        super(name, id, department, salary);  //Inherit the objects from class Employee
        this.teamSize = teamSize; //Add the object team size 
    }
    getDetails(){
       return(`${super.getDetails()}\n Team Size: ${this.teamSize}`); //override getDetails to include team size
    }
    calculateBonus(){
        return (`Bonus $${(this.salary *12) *0.10}`)  //use function calculate bonus to calculate the bonus salary for the manager and return it
    }
}

const mgr1 = new Manager ("John Smith", 201, "IT", 8000, 5);  //Plug in manager information to the class
console.log(mgr1.getDetails()) //return the manager details from class

console.log(mgr1.calculateBonus()) //return the manager bonus from the calculateBonus function in the manager class