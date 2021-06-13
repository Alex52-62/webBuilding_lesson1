var urls = ['./common.js', './file1.js', './file2.js', './file3.js'];

function loadScript(url, callback) {
    const script = document.createElement("script");
    ++loadScript.cnt;
    script.src = url;
    script.type = "text/javascript";
    if (script) {
        script.onload = function() {
            --loadScript.cnt;
            callback(loadScript.cnt, url);
        }
        document.head.insertAdjacentHTML('beforeend', script.outerHTML);
    }
}

loadScript.cnt = 0;

loadScript('./common.js', checkAllDone);
loadScript('./file1.js', checkAllDone);
loadScript('./file3.js', checkAllDone);
loadScript('./file2.js', checkAllDone);

function checkAllDone(cnt, urls) {
    if (cnt === 0) {
        //
    }
}