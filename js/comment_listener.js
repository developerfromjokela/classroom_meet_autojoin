/*$("div[jsname='QmABz']").bind("DOMNodeInserted",function(elem){
    comment = elem.target;
    text=comment.innerText;
    console.log(text);
    alert(text);
});*/
function interval(duration, fn){
    this.baseline = undefined;

    this.run = function(){
        if(this.baseline === undefined){
            this.baseline = new Date().getTime()
        }
        fn()
        var end = new Date().getTime()
        this.baseline += duration

        var nextTick = duration - (end - this.baseline);
        if(nextTick<0){
            nextTick = 0
        }
        (function(i){
            i.timer = setTimeout(function(){
                i.run(end)
            }, nextTick)
        }(this))
    };

    this.stop = function(){
        clearTimeout(this.timer)
    }
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

var lastCount=-1;
function check() {
    if (isHidden(document.getElementsByClassName("a6pJXc").item(0))) {
        if (lastCount === -1) {
            lastCount = document.getElementsByClassName("dZVZab").length;
        } else {
            var currentCount = document.getElementsByClassName("dZVZab").length;
            if (currentCount !== lastCount) {
                lastCount = currentCount;
                newComment = document.getElementsByClassName("dZVZab")[currentCount-1];
                body = newComment.getElementsByClassName("tLDEHd").item(0).textContent;
                time = newComment.getElementsByClassName("dDKhVc").item(0).textContent;
                if (/[0-9]*.[0-9][0-9]/.test(time) || /[0-9]*:[0-9][0-9]/.test(time)) {
                    var expression = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
                    var matches = body.match(expression);
                    for (match in matches) {
                        var link = matches[match];
                        if (/^https:\/\/meet.google.com/.test(link)) {
                            console.log(link);
                            window.open(link+"?autojoin", '_blank')
                        }
                    }
                }
            }
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            check();
        }
    };
    xhr.open('GET', 'https://play.google.com/log?format=json&hasfast=true&authuser=1', true);
    xhr.send(null);
}
if (document.querySelector("div[role='listitem']") == null)
    check();