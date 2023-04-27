
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