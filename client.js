const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


function bonusCalculator (employees) { 
  if (employees[i].reviewRating === 3) {
    console.log('rating is 3');
    let rating3 = 1.03; 
  }
  else if (employees[i].reviewRating === 4) {
    console.log('rating is 4');
    let rating4 = 1.04;
}
  else if (employees[i].reviewRating >= 5) {
    console.log('rating is 5');
    let rating5 = 1.05;
  }
  else {console.log('rating is 2 or below')}
}

if (employees[i].employeeNumber.length === 4) { // possibly revisit
  console.log('Employee number is 4 digits');
  let numberLength = 1.05;
} 
  else {console.log('employee number is not 4 digits')}

if (employees[i].annualSalary >= '65000') { // number is string
  console.log('Annual salary is over 65000');
  let salaryCap = 0.99;
} 
  else {console.log('Salary is under 65000')}

if (totalBonus >= 1.13) {
  console.log('bonus is set to 13%');
  totalBonus = 1.13 
} 
  else if (totalBonus > 1 && totalBonus < 1.12 ) {
   console.log('bonus stays the same')
  }
  else {console.log('bonus is set to 0%')}
