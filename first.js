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
// Promise.all([cratePost(),updatePost(),deletePost()])
// .then(()=>{
//     console.log("User is Offline")
// })
// .catch((error)=>{
//     console.log(error);
// })

//Using promises...
// cratePost().then(()=>{
//     updatePost().then(()=>{
//         deletePost().then(()=>{
//             console.log("User is offline")
//         })
//     })
// })

//Using async await
async function fun1(){
const messg1=await cratePost();
const messg2=await updatePost();
const messg3=await deletePost();
}
fun1();

