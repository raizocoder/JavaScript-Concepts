// Difference between var let and const
//(1) Declaration and Assignment in separate lines
//(2) Redecoration and Reassignment
//(3) Scopes
//(4) Hoisting
//(5) Hoisting
//(6) Store

//(1) Declaration and Assignment in separate lines------------------>

// var a;
// a = 1;
// console.log(a); // no error

// let b;
// b = 2;
// console.log(b); // no error

// const c = 3; // in const it is compulsory for  declaration and assignment in on line;

//(2)  Redecoration and Reassignment with Same name----------------->

// var x = 1;
// var x = 2;

// var a = 1;
// a = 2;
// var has feature declare and assign two times with same or different values both are correct but takes the latest values.

// let y = 1;
// y = 3; no error values changes and takes its latest values

// let y = 1;
// let y = 2;
//  this give error because let has feature only to assign again only value not to declare with same name;



// const a = 1;
// a = 2;
//error comes

// const a = 1;
// const a = 3;
// error comes
// const does not have feature to reassign and redeclaration
