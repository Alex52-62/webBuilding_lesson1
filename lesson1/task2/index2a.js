function loadScript(urls, callback) {
    var urls = ['./common.js', './common.js', './common.js', './file1.js', './file2.js', './file3.js'];
    var filteredUrls = urls.filter(function(item, index) {
        if (urls.indexOf(item) == index)
            return item;
    });
    for (let i = 0; i < filteredUrls.length; i++) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = filteredUrls[i];
        script.onload = callback;
        document.head.insertAdjacentHTML('beforeend', script.outerHTML);
    }
}

loadScript(['./common.js', './common.js', './common.js', './file1.js', './file2.js', './file3.js'], () => {
    log();
    console.log("load index2a.js");
})