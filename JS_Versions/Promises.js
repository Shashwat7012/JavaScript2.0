// A Promise is a JavaScript object that links "Producing Code" and "Consuming Code".

// "Producing Code" can take some time and "Consuming Code" must wait for the result.

const myPromise = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{myResolve("Shashwat");},3000);
});

// myPromise.then(()=>{
//     let a = value;
// })
// console.log(a)


// ...In async