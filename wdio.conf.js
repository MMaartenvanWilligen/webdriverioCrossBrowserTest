exports.config = {

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: "windows 10"
    }, {
        browserName: "firefox",
        version: 'latest',
        platform: "windows 10"
    }],
    specs: [
        './test/first-test.js'
    ]
};

