function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function checkWhen() {
    console.log(document.querySelector("div[jsname='Qx7uuf']"));

    if (document.querySelector("div[jsname='Qx7uuf']") != null) {
        document.querySelector("div[jsname='Qx7uuf']").click();
    }

    // Making the request to not break the classroom, because setInterval doesn't let any other scripts to run
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            checkWhen();
        }
    };
    xhr.open('GET', 'https://play.google.com/log?format=json&hasfast=true&authuser=1', true);
    xhr.send(null);
}

if (getParameterByName("autojoin") != null) {
    checkWhen();
}
