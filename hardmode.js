function currentTime() {
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)

    document.getElementById("jsclock").innerHTML = '#' + hour + min + sec
    
    var time = setTimeout(function(){ currentTime() }, 1000)
}

function updateTime(a) {
    if (a < 10) {
        return "0" + a
    } else {
        return a
    }
}

currentTime() 

setInterval (function(){
    var randomColor = Math.floor(Math.random() * 16777215) .toString(16) 
    document.body.style.background = "#" + randomColor
}, 2000)

