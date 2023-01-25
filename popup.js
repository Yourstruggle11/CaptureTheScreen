document.getElementById("screenshot-button").addEventListener("click", function() {
    chrome.tabs.captureVisibleTab(null, {}, function(screenshotUrl) {
        console.log('====================================');
        console.log(screenshotUrl);
        console.log('====================================');
        var canvas = document.getElementById("screenshot-canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = screenshotUrl;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };

        var link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = screenshotUrl;
        link.click();
    });
});
