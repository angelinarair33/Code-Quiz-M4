document.getElementById("scores").onclick = function () {
 location.href = '/Code-Quiz-M4/indexscores.html';
}

document.getElementById("button").onclick = function () {
    const element = document.getElementById("timer");
    var time = 121;
    setInterval(function() {
        time--
        element.innerHTML = time
        if (time === 0) {
            setTimeout(function(){
                window.location.href = '/Code-Quiz-M4/indexform.html';
             }, );
        }
    }, 1000);
}