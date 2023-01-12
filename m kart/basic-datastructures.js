// const arr = [1, 2, 4, 1, 2, 4] // 1 ,2, 4
// console.log(arr.includes(200))

// const unqArr = arr.filter( ( el, ind, a ) => {
//     // oth iteration
//     // el = 1, ind = 0, a = 1, 2, 4, 1, 2, 4
//     // 1st iteration
//     // el = 2, ind = 1, a = 1, 2, 4, 1, 2, 4
//     // 2nd iteration
//     // el = 4, ind = 2, a = 1, 2, 4, 1, 2, 4
//     // 3rd iteration
//     // el = 1, ind = 3, a = 1, 2, 4, 1, 2, 4
//     // 4th iteration
//     // el = 2, ind = 4, a = 1, 2, 4, 1, 2, 4
//     // 5th iteration
//     // el = 4, ind = 5, a = 1, 2, 4, 1, 2, 4

//     console.log(`Index : ${ind}, Item : ${el},  Array : ${a}`)

//     const indOfCurItm = a.indexOf(el)
//     // [1, 2, 4, 1, 2, 4] what is the index of 1 = 0
//     // [1, 2, 4, 1, 2, 4] what is the index of 2 = 1
//     // [1, 2, 4, 1, 2, 4] what is the index of 4 = 2
//     // [1, 2, 4, 1, 2, 4] what is the index of 1 = 0
//     // [1, 2, 4, 1, 2, 4] what is the index of 2 = 1
//     // [1, 2, 4, 1, 2, 4] what is the index of 4 = 2

//     // 0 === 0
//     // 1 === 1
//     // 2 === 2

//     // 0 === 3
//     // 1 === 4
//     // 2 === 5

//     return indOfCurItm === ind

// } )
// console.log(unqArr)

// what is the index of 1 = 0 => indOfCurItm === ind : 0 == 0
// what is the index of 2 = 1 => indOfCurItm === ind : 1 == 1
// what is the index of 4 = 2 => indOfCurItm === ind : 2 == 2
// what is the index of 1 = 3 => indOfCurItm === ind : 3 == 0
// what is the index of 2 = 4 => indOfCurItm === ind : 4 == 1
// what is the index of 4 = 5 => indOfCurItm === ind : 5 == 1

//< ----------------------this is mine syed technical---------->

// const array=[1,2,3,4,1,2,3,4];
// console.log(array.includes(2))

// const unqArr = arr.filter( ( el, ind, a ) => {
//     console.log(`Index : ${ind}, Item : ${el},  Array : ${a}`)

//     const indOfCurItm = a.indexOf(el)
//     return indOfCurItm === ind

// } )
// console.log(unqArr)

// const array=[1,2,3,4,1,2,3,4];
// console.log(array.includes(200))
// const unqarr=array.filter((el,ind,a,val,names)=>{
// console.log(`index => ${ind} el=> ${el} || a ${a} val ${val}
// nams => ${names}`)

// const inds=a.indexOf(el);
// return inds ===ind;
// })
// console.log(unqarr)

// const array=[1,2,3,4,5,6];
// console.log(array.includes(22));
// const names=array.filter((el,index,a,val)=>{
// console.log(`index => ${index} el => ${el}
// a => ${a} val => ${val}`)

// const inds=a.indexOf(el);
// return inds ===index;
// })
// console.log(array)


// const app=[1,2,3,1,2,3];
// console.log(app.includes(22));
// const apple=app.filter((elem,index,a)=>{
// console.log(`elem => ${elem} index => ${index}`)
// const inds=a.indexOf(elem);
// return inds === index;
// })
// console.log(app)








