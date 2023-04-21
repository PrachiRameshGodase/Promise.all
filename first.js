function cratePost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`User CreatedPost at:${new Date().toLocaleString()}`);
            resolve();

        },1000)
    })
}
function updatePost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`User UpdatePost at:${new Date().toLocaleString()}`);
            resolve();

        },2000)
    })
}
function deletePost(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`User deletePost at:${new Date().toLocaleString()}`);
            resolve();

        },3000)
    })
}
Promise.all([cratePost(),updatePost(),deletePost()])
.then(()=>{
    console.log("User is Offline")
})
.catch((error)=>{
    console.log(error);
})