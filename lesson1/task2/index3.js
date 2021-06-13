function loadScript(callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = './common.js';
    script.onload = callback;
    document.head.insertAdjacentElement('beforeend', script);
}

loadScript('./common.js', () => {
    log();
    console.log("load index3.js");
})