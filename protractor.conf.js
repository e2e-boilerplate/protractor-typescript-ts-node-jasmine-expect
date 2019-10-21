exports.config = {
    directConnect: true,
    specs: [
        './spec/*.spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        isVerbose: true,
        realtimeFailure: true
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
};
