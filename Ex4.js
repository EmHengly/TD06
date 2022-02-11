const getPost = axios.get(' https://jsonplaceholder.typicode.com/posts')


getPost.then((result)=>{
    console.log(result.data);
})
const getComment = axios.get(' https://jsonplaceholder.typicode.com/comments')

getComment.then((result)=>{
    console.log(result.data);

})
const getPhoto = axios.get('https://jsonplaceholder.typicode.com/photos')


getPhoto.then((result)=>{
    console.log(result.data);
})

Promise.all([getPost,getComment,getPhoto]).then((result)=>{
    console.log("All data is loaded",result);
    var dis = document.getElementById('success');
    dis.textContent = "Data are loaded";
}).catch((err)=>{
    console.log(new Error().message);
})