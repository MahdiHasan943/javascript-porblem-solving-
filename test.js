
//problem 1 prict six digit random number
const sixDigit = (min, max) => {
    return Math.random().toString().substr(min,max)
    
}

console.log()


// problem 2 print your class mates name Alphabetically,

const Students = ["zihad", "masum", "nahid", "mahdi", ];

const alphabet = (value) => {
     value.sort();

}
// console.log(alphabet(Students));
// problem 3  sort roll numbers in order
const number = [2, 4, 5, 50, 60, 30, 80, 200, 100,];



// console.log(number.sort(function (a, b) {
//     return b- a;
// }));
// problem 4 find leap year ;
const leapYear = (year) => {
    
    if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
        console.log('year is a leap year');

    }
    else {
        console.log('this is a not leap year');
    }
};

// problem 5 find  vowl ;

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const findVowels = (sentences) => {
    let count = 0;
    const letter = Array.from(sentences);
    letter.forEach((value) => {
        if (vowels.includes(value)) {
            count++;
        }
        

    })
    return count;

};
// console.log(findVowels('I have been working here for two yars'));

// problem 6 find dublicate number from an affay;

const arr = [1, 5, 6, 9, 9, 8, 5, 7, 4, 2, 3, 40, 50, 50, 60, 100, 2,7];

const findDublicate = arr.filter((value, index, arr) => {
   
    return arr.indexOf(value) == index;


}) 
// console.log(findDublicate);


// problem solving
// 1 ONE  my first full function problme solving
const remainingMOney = (orange, apple, money) => {
  const kg = 300;
  const akg = 400;
  const total1 = orange * 300;
  const totala = apple * 400;
  const total = total1 + totala;
  const minus = money - total;
  return minus;
};
// console.log(remainingMOney(5,5,4000));

const remainder = (input) => {
  const outPut = input % 5;
  return outPut;
};
// console.log(remainder(108));

// find grades of me and my friends

const findGrade = (number) => {
  if (number >= 80) {
    console.log("your grade is A ");
  } else if (number < 80 || number <= 60) {
    console.log("your grade is b");
  }
};
// findGrade(79)

//4 reverse an array element usign loop ;
const arr = [30, 40, 60, 80, 302, 400, 500];
for (let i = arr.length - 1; i >= 0; i--) {
  let number = arr[i];
  // console.log(number);
}

// 5  find average of array ;
// const array = [20, 40, 50, 70];
const make_average = (array) => {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    number += array[i];
    // console.log(number);
  }
  var Find = number / array.length;
  return Find;
};
// console.log(make_average( [20,20,20,20,20,40]));

// 6 write a function that check number is even or odd;
const odd_event = (number) => {
  if (number % 2 === 0) {
    console.log("This is a event number ");
  } else {
    console.log("this is a odd number");
  }
  return number;
};

//7  leap yrar
const leapYear = (year) => {
  // if (year % 4 ===0) {
  //     console.log('This is a leap year ');
  // }
  // else {
  //     console.log('this is not a leap year');
  // }
  let result = 0;
  for (let i = 0; i < year.length; i++) {
    result = year[i];
    if (result % 4 === 0) {
      console.log(result);
    }
  }
  return result;
};
// console.log(leapYear([2020,1990,1800,2300,2000,2001,2002,2003,2004,2010,2012,2011,2024]));

// 8 find oddSum  of array ;
// const array = [20, 40, 50, 70];
const sumOdd = (array) => {
  let number = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const index = i;
    number = array[i];
    if (number % 2 === 1) {
      //   console.log(index,number);
      sum += number;
    }
  }
  return sum;
  // return sum;
};
// console.log(sumOdd([12,33,33,40,11]));
// 9 factorial number find

const factorial = (number) => {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
};
// console.log(factorial(6));

// 10 math object
function shallowEqual(object1, object2) {
  const keys1 = object1["name"];
  const keys2 = object2["friend"];
  const keys3 = object2["name"];
  const keys4 = object1["friend"];

  if (keys1 !== keys2) {
    return false;
  }
  if (keys3 !== keys4) {
    return false;
  }
  if (
    typeof keys1 == "number" ||
    typeof keys2 == "number" ||
    typeof keys3 == "number" ||
    typeof keys4 == "number"
  ) {
    return "error: please enter the right name";
  }
  return true;
}
//11 tallest nu mber of array

const findTallest = (number) => {
  let tallest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > tallest) {
      tallest = element;
    }
  }
  return tallest;
};


// Remove duplicate items from an array

const removeDublicateArray = (arr) => {
  const uniqe = [];
   let result =''
  for (let i = 0; i < arr.length; i++){
    const name = arr[i];
    if (uniqe.includes(name)===false) {
      uniqe.push(name)
      

     }
           
  }
  for (let i = 0; i < uniqe.length; i++){
    // console.log(result=uniqe[i]);
  }

  return result
}

console.log(removeDublicateArray(['baba','dada','baba','dada','sister','bro','sister','mom','aunt','mom','uncle']));




// from problem new file 



// Write an arrow function where it will do the following:
//a) It will take an array where the array elements will be the name of your friends
//b) Check if the length of each element is even, push elements
//with even length to a new array and return the result Print the result.

const arr = ['mahdi', 'manum', 'Zihad','abal', 'Nahid', 'Jakir', 'Mahmud'];

const findEvenLength = (arr) => {  
    const copy = [];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        if (element.length%2===0) {
          copy.push(element)
            
        }
        
    }
    return copy;


    
}

// console.log(findEvenLength(arr));

// Write an arrow function where it will do the following:
//.a) It will take two array inputs
//b) Combine the two arrays and assign them in a new array
//c) Find the maximum number from the new array and return the result

const numberOne = [20, 40, 10, 5, 4, 67, 4];
const numberTwo = [80, 90, 100, 400, 600, 10];

const findMaxNumber = (nOne, nTwo) => {
  
  const newArray = [...nOne, ...nTwo]
  const maxNmuber =Math.min.apply(null,newArray)
  return maxNmuber;


} 
// console.log(findMaxNumber(numberOne,numberTwo));


//  Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people = [
  {name:'mina' ,age:20},
  {name:'mice',age:15},
  {name:'lucy',age:22}

]

const findTotalAges = people.reduce((prev, current) => {
 

  return prev+current.age
},0)
// console.log(findTotalAges);
