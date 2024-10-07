
//0.
let txt = "something that is a txt and more that 20 characters";
//1.
let first5 = txt.slice(0,6)
//2.
let thirdto8th = txt.slice(2,9)
//3.
let from5 = txt.slice (4)
//4.
let from5butlength6 = txt.slice (4,11)
//5
let makeitupper = txt.toUpperCase();
//6
let everySecondUpper = txt.split('').map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char;
}).join('');
//7
let replaceE = txt.replace(/e/g, "E")
//8
let Esplit = txt.split('e')



// MAIN
console.log(first5);
console.log(thirdto8th);
console.log(from5);
console.log(makeitupper);
console.log(everySecondUpper);
console.log(replaceE)
console.log(Esplit)