
// 👉 I want to make a sqaure of n and add 10 to it.
// 👉 Result of above requirent needs to divided by 45. 
// If Gte > 6 return normal else bad data 

// function makeSqrAdTen(num) {
//     const n = num
//     const sqr = (n * n) + 10
//     return sqr
// }

// function dvdChk(rs) {
//     const dvd = rs / 45
//     const sts = (dvd > 6) ? 'normal data' : 'bad data'
//     console.log('Status is : '+ sts)
// }

// const rsVl = makeSqrAdTen(7)
// dvdChk(rsVl)


// <------------this is mine syed technical --------->

const names=(num=1)=>{
    const n = num;
    const srr =(n * n) +10;
    return srr
}
console.log(names())

const second=(rs=11)=>{
  const dvd = rs /45;
  const sts=(dvd>6) ? 'normal data' :'bad data'
  console.log('status is '+sts)
}

const nnn=names(7)
console.log(nnn)
console.log(second())