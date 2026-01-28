
// function create(fn) {
//     fn(function (fn3) {
//         fn3(function (fn5) {
//             fn5()
//         })

//     })
// }
// create(function (fn2) {
//     fn2(function (fn4) {
//         fn4(function () {
//             console.log("hii")
//         })

//     })
//

function getuser(usernmae,cb) {
    console.log("fetching details")
    setTimeout(() => {
        cb({id:29,usernmae:usernmae})
    }, 1000);
}
function userpost(id,cb){
    console.log("fetching all post")
    setTimeout(() => {
        cb(["all","lol","pol","mol"])
    }, 2000);
}
getuser("atul",function(data){
    userpost(data.id,function(allpost){
        console.log(data.usernmae,allpost)
    })
});
