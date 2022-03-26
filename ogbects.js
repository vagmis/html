
// Task 1
let details = {
    name: 'sam',
    lname: 'tim',
    place: 'nagpur',

}


console.log([details]);

details.name='miss';

delete details.lname;


 // Task 2

let salaries ={
    john: 1500,
    Peter: 2000,
    Vignesh: 4500,
    amy: 5500
}

let totalSal = 0;

for(let sal in salaries){
    totalSal += salaries[sal];
}

console.log('total salary is: ',totalSal);


//  Task 3 multiply the value by 2 if its a number


let pageInfo = {
    width: 500,
    height: 800,
    title: 'My page'
}



for(let val in pageInfo){
    if(typeof pageInfo[val] == 'number'){
         pageInfo[val] *= 2; 
    }
}

console.log(pageInfo);


// Task 4 Calculator 

let calculator = {
  num1 : 0,
  num2 : 0,
  read: () => {
      num1 = prompt('enter number');
      num2 = prompt('enter number');
  },
  addition: () => {
      console.log(Number(num1)+Number(num2));
  },
  multiplication: () =>{
      console.log(Number(num1)*Number(num2))
  }

}


calculator.read();
calculator.addition();
calculator.multiplication();


// Task 5 ladder up and down 

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return  this;
    }
  };
  
// ladder.up().up().down().showStep().up().showStep()
  

// Task 5 adding constructor to the calculator
function Calculator() {
    this.num1=0;
    this.num2=0;
    this.read = function ()  {
        this.num1 = prompt('enter number');
        this.num2 = prompt('enter number');
  },
        this.addition = function ()  {
        let sum = this.num1+this.num2
        console.log(" added value",sum);
},
        this.multiplication = function () {
        console.log(this.num1*this.num2)
     }

}

let calculator = new Calculator();
calculator.read();
calculator.addition();
calculator.multiplication();
