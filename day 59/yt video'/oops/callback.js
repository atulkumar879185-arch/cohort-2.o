function ram(cb){
    setTimeout(() => {
        console.log("hello bro")
        cb()
    }, 2000);
}
ram(function(){
    console.log("hn me ab chalunga");
})
