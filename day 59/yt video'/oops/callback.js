function ram(cb){
    setTimeout(() => {
        console.log("hello bro")
        cb()
    }, 2000);
}
ram(function(){
    console.log("hn me ab chalunga");
})

let arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val);
})