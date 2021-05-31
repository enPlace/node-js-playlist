let time = 0; 

function counter(){
    time +=2
    console.log(time +" seconds have passed")
    if(time>5){
        clearInterval(timer)
        console.log("out of time")
    }
}
let timer = setInterval(counter, 2000)