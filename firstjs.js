// class Aero {
//   constructor(name, age, plc) {
//     this.name = name;
//     this.age = age;
//     this.plc = plc;
//   }
// }
// class Depart extends Aero {
//   constructor(name, age, plc, group) {
//     super(name, age, plc);
//     this.group = group;
//   }
// }
// function area(a, b) {
//   let val = a.age * b.age;
//   return val;
// }
// let stud = new Aero("as", 10, "no");
// let stud2 = new Depart("aks", 20, "non", "A");
// ___________________
// console.log(stud.name);
// console.log(stud2.group);
// console.log(area(stud,stud2));
// 1) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result
// 2)Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message.
// "0 is even"
// "1 is odd"
// "2 is even"
// 3)Write a JavaScript program to find the armstrong numbers of 3 digits
// 4)Clicking on the button the font, font size, and color of the paragraph text will be changed.
// 5)Write a JavaScript function to get the values of First and Last name from a form. You can create your own form
// _________________________
let a = "1 3 2";
let c = a.split(" ");
c.sort();
let m="";
let k=c.reduce((i,j)=>i+j+" ",m)
console.log(k);
// ___________________________
// let n=103;
// let k=n.toString();
// let sum=0;
// for(let i=0;i<k.length;i++){
//     sum=sum+(Number(k[i]))**3
// }
// if(sum===n)
// console.log("armstrong number");
// else
// console.log("not armstrong number");
// -----------------------------