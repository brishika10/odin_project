// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello
let fruits=[];
console.log(fruits[0]); // undefined
fruits[100]=5;
fruits[50]=1;
fruits['age']=25;
console.log(fruits.length); // 101  
console.log(fruits);