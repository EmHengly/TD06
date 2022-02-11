 async function display(){

        return "Hello world"
}

console.log(display());
display().then((result)=>{
   setTimeout(() => {
    console.log(result);
   }, 5000);
})


