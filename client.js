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



// IF ELSE STATEMENTS
function bonusCalculator (employees) { 
  let totalBonus = 0;
  
  // LOOP
  for (let i=0; i < employees.length; i++) {


 
    if (employees[i].reviewRating === 3) {
      console.log('rating is 3');
      let rating3 = .03; 
      totalBonus += rating3;
    }
    else if (employees[i].reviewRating === 4) {
      console.log('rating is 4');
      let rating4 = .04;
      totalBonus += rating4;
  }
    else if (employees[i].reviewRating >= 5) {
      console.log('rating is 5');
      let rating5 = .05;
      totalBonus += rating5;
    }
    else {console.log('rating is 2 or below')}
  

  if (employees[i].employeeNumber.length === 4) { // possibly revisit
    console.log('Employee number is 4 digits');
    let numberLength = .05;
    totalBonus += numberLength;
  } 
    else {console.log('employee number is not 4 digits')}

  if (employees[i].annualSalary >= '65000') { // number is string
    console.log('Annual salary is over 65000');
    totalBonus -= .01;
  } 
    else {console.log('Salary is under 65000')}

  if (totalBonus >= 0.13) {
    console.log('bonus is set to 13%');
    totalBonus = 0.13 
  } 
    else if (totalBonus > 0 && totalBonus < .12 ) {
    console.log('bonus stays the same')
    }
    else {console.log('bonus is set to 0%')}
    totalBonus += 1;
    console.log(totalBonus);

  }
}
  bonusCalculator(employees);