function loadScript(url, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.insertAdjacentElement('beforeend', script);
}

loadScript('./common.js', () => {
    log();
    console.log("load index.js");
})