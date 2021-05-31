let time = 0; 

function counter(){
    time +=2
    console.log(time +" seconds have passed")
}
setInterval(counter, 2000)