let promis = new Promise((resolve,reject) =>{

    setTimeout(() => {
        resolve("Hello world");
    }, 5000);
})
promis.then((result) =>{
    console.log(result);
}).catch((reject) =>{
    console.log(reject);
})
