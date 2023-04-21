// function p1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("This is my first promise")
//             resolve(10);
//         },1*1000);
//     })
// }
// function p2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("This is my second promise")
//             resolve(20);
//         },2*1000);
//     })
// }
// function p3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("This is my three promise")
//             resolve(30);
//         },3*1000);
//     })
// }
// var total=0;
// Promise.all([p1(),p2(),p3()]).then((result)=>{
//     for(var i in result){
//         total=total+result[i]
//     }
    
//     console.log(`${result}`);
//     console.log(`${total}`)
// })
// .catch((error)=>{
//     console.log(` Error:${error}`);
// })

//another way...
let PromiseCall=function(returnData,message){
    return function(resolve,reject){setTimeout(()=>{
        console.log(`This is my ${message} promise`)
        resolve(returnData);
    },returnData*1000);}
    
}

let p1=new Promise(PromiseCall(10,"first"));
let p2=new Promise(PromiseCall(20,"second"));
let p3=new Promise(PromiseCall(30,"three"));
var total=0;
Promise.all([p1,p2,p3]).then((result)=>{
    for(var i in result){
        total=total+result[i]
    }
    
    console.log(`${result}`);
    console.log(`${total}`)
})
.catch((error)=>{
    console.log(` Error:${error}`);
})
