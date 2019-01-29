let str = 'Mojo Jojo';
// Length
console.log('Length: ', str.length);

// Uppercase method
console.log(str.toUpperCase());

// Includes method
console.log(str.includes('mo', 2)); // false
console.log(str.includes('jo', 2)); // true

// Trim method
let str2 = '  dummy string         '
console.log(str2.trim()); // dummy string
console.log(str2); //   dummy string