function loadScript(urls, callback) {
    var urls = ['./common.js', './file1.js', './file2.js', './file3.js'];
    for (let i = 0; i < urls.length; i++) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = urls[i];
        script.onload = callback;
        document.head.insertAdjacentHTML('beforeend', script.outerHTML);

    }
}

loadScript(['./common.js', './file1.js', './file2.js', './file3.js'], () => {
    log();
    console.log("load index2.js");
})