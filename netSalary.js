/*//declare variables for tax rates and deductions
const taxRate = 0.3;
const nhifRate = 0.02;
const nssfRate = 0.01;

//we let users input their basic salary and allowances

const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const allowances = parseFloat(prompt("Enter your total allowances: "));

//formular for calculating gross salary
const grossSalary = basicSalary + allowances;

//to get deductions 

const nssfDeducation = Math.min(grossSalary * nssfRate);
const nhifDeducation = Math.min(grossSalary * nhifRate);
const paye = Math.max(grossSalary - nhifDeducation - nssfDeducation, 0) * taxRate

//calculating the net salary
const netSalary = grossSalary - nhifDeducation - nssfDeducation - paye;

//print to check the output

console.log(`Basic salary is: ${basicSalary}`);
console.log(`Total allowances is: ${allowances}`);
console.log(`The gross salary is: ${grossSalary}`);
console.log(`Your NHIF deducation is: ${nhifDeducation}`);
console.log(`NSSF deduction: ${nssfDeduction}`);
console.log(`Payee: ${paye}`);
console.log(`The net pay: ${netSalary}`); */