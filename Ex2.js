let promise1 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("hello from promise1")
    }, 1000);
})
let promise2 = new Promise((resolve,reject)=>{

    setTimeout(() => {

        resolve("hello from promise2")
    }, 2000);
})
let promise3 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("hello from promise3")
        
    }, 3000);
})
let promise4 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("hello from promise4")

    }, 4000);
})

Promise.all([promise1,promise2,promise3,promise4]).then((result) =>{
    console.log(result);
    console.log("All tasks are ready");
  
})
