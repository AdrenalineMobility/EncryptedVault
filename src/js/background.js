chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('html/main.html', {
        'bounds': {
            'width': 400,
            'height': 500
        }
    });
});
