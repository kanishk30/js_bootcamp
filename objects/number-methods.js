let num = 103.86782;
console.log(num.toFixed(2)); // 103.87

console.log(Math.round(num)); // 104
console.log(Math.floor(num)); // 103
console.log(Math.ceil(num)); // 104

// random number between min & max
let max = 20;
let min = 10;
console.log(Math.floor((Math.random() * (max - min + 1) + min))); 