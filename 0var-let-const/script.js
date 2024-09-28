// Difference between var let and const
//(1) Declaration and Assignment in separate lines
//(2) Redecoration and Reassignment with same name or variable
//(3) Hoisting
//(4) Scopes
//(5) Store
//(6) Versions

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

//(3) Hoisting ------------------------------------>
// Hoisting means when variable calls before its declaration

// console.log(a);
// var a = 1;
// it gives undefined

// console.log(a);
// let a = 1;
// it gives reference error , cannot access before its initialization

// console.log(a);
// const a = 1;
// it gives reference error , cannot access before its initialization

//(4) Scopes ------------------------->

// var is function scope

//  var is function scoped
//  function one (){
//     var a = 1;
// console.log(a);
//  }
//  one()
// console.log(a);
// when var is defined in function and outside the function it gives error because it access only inside function only not outside.

// let and const are block scope
// It means that any curly braces inside let and const declared then it can't access outside their curly braces only inside like in function, loops , conditionals  and also include normal curly braces.

// {
//   let a = 1;
//   const b = 2;
// }
// console.log(a,b);
// it gives error

//(5) Store

// var and regular function are part of global object

// var a = 1;
// console.log(window);
// a variable is present in window

// let and const are not part of window object
// debugger
// let a = 1;
// const b = 2;
// using debugger to check let and const are stored in script scope 


//(6) Versions

// let and const are ES6 versions , they recommenced way to declare variable
// var is used in older version like before 2015,

