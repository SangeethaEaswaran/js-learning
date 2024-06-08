const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,200,"King")
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"Queen")
});
Promise.all([promise1, promise2]).then((x)=> console.log("All=>", x))
Promise.allSettled([promise1, promise2]).then((r)=>{
    console.log(r)
    r.forEach((x)=> console.log("Allsettled", x, x.status))
})
Promise.any([promise1, promise2]).then((y)=> console.log("Any=>", y))

let mypromise = new Promise(function(resolve, reject){ throw "Error 404"})
mypromise.catch((x)=> console.log("mypromise", x))