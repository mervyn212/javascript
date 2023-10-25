const countries = [["Japan", "Tokyo"],["South Korea" , "Seoul"],["Indonesia" , "Jakarta" ],];
console.log(countries [0][1]); // Tokyo
console.log(countries [1][0]); // South Korea
console.log(countries [2]); // [Indonesia, Jakarta]
console.log(countries .length); // 3
console.log(countries [1].length); // 2


let numbers = [6,3,20,10,2];
console.log(numbers);
numbers.sort((a,b)=>a-b)
console.log(numbers);
console.log(numbers[0]);
numbers.reverse()
console.log(numbers);