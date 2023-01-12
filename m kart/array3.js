const arr = [1, 2, 4, 1, 2, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

console.log(`Original`);
console.log(arr);
console.log(`--- Operations Output ---`);
// arr.forEach( el => console.log(el) )
console.log(`👉 Find Index`);
const ind = arr.findIndex((el) => el == 1);
console.log(`Index ${ind}`);

console.log(`👉 Find`);
const el = arr.find((el) => el > 3);
console.log(`Element ${el}`);

console.log(`👉 Filter`);
const els = arr.filter((el) => el > 3);
console.log(els);

console.log(`👉 Every and Some`);
const ev = arr.every((el) => el > 3);
console.log(`Is Every Element is greater than 3 : ${ev}`);
const sm = arr.some((el) => el > 3);
console.log(`Are there some elements, which are greater than 3 : ${sm}`);

console.log(`👉 Map`);
// make a square of each element and return new array
const sqArr = arr.map((el) => el * el);
console.log(sqArr);

console.log(`👉 Unshift and Shift`);
const nwLn1 = arr.unshift(56, 90);
console.log(arr);
console.log(nwLn1);

const rmFst = arr.shift();
console.log(arr);
console.log(rmFst);

console.log(`👉 Slice and Splice`);
console.log(arr);
const slc1 = arr.slice((start = 3));
console.log(slc1);
const slc2 = arr.slice((start = 3), (end = 5));
console.log(slc2);

arr.splice((start = 0), (deleteCount = 0));
console.log(arr);

// // <------------------------             (This is mine syed technical ✓)                        ---------------------->
const apple = [1, 2, 4, 1, 2, 5];
console.log("Original");
console.log("--Operations Output--");
console.log("Find Index");
const elm = apple.findIndex((elm) => elm < 3);
console.log(`Index ${elm}`);
console.log("find");
const apps = apple.filter((elm) => elm > 4);
console.log(`Element ${apps}`);

// sir
// console.log(`👉 Every and Some`)
// const ev = arr.every( el => el > 3 )
// console.log(`Is Every Element is greater than 3 : ${ev}`)
// const sm = arr.some(el => el > 3)
// console.log(`Are there some elements, which are greater than 3 : ${sm}`)
// sir

console.log("every and some");
const evs = apple.every((elm) => elm > 3);
console.log(`this is element is greter than 3 : ${evs}`);
const evss = apple.some((elm) => elm < 3);
console.log(`are there some elements which are greter then 3 ${evss}`);
console.log("Map");
const map = [1, 4, 16, 1, 4, 25];
console.log(map);
console.log("Unshift and shift");
console.log(apple);
const sql = apple.map((el) => el * el);
console.log(sql);
// const sql=apple.map(addads=>elm*addads)
// console.log(sql)
const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const app = names.map((add) => add * add);
console.log(names, "names-------->");
console.log(app);
const sql= apple.map(elm=> el*el);
console.log('this is a map'+sql)

console.log(`👉 Map`)
// make a square of each element and return new array
const sqArr = arr.map( el => el * el )
console.log(sqArr)

console.log(`👉 Unshift and Shift`)
const nwLn1 = arr.unshift(56, 90)
console.log(arr)
console.log(nwLn1)
const news= [1,2,3,4];
console.log(news)
const namess= news.unshift(133);
console.log(namess)
const newss1=news.shift();
console.log(news)
console.log(newss1)

console.log(`👉 Slice and Splice`)
console.log(arr)
const slc1 = arr.slice(start = 3)
console.log(slc1)
const slc2 = arr.slice(start = 3, end = 5)
console.log(slc2)

arr.splice(start = 0, deleteCount = 0)
console.log(arr)
console.log('slice and splice')
console.log(apple)
const slic=apple.slice(start <3);
console.log(slic)
console.log(apple)
const sl2=apple.slice(start = 3 , end =5);
console.log(slc2)