// An example configuration file.
exports.config = {

    // Capabilities to be passed to the webdriver instance.

    multiCapabilities: [
        {
            'browserName': 'chrome'
        },
        {
            'browserName': 'firefox'
        },
        {
            'browserName': 'phantomjs',
            'phantomjs.binary.path': require('phantomjs').path,
            'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
        }
    ],
    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');

        // returning the promise makes protractor wait for the reporter config before executing tests
        return browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;

            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testresults',
                // this will produce distinct xml files for each capability
                filePrefix: browserName + '-xmloutput',
                modifySuiteName: function(generatedSuiteName, suite) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['tests/*.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    plugins: [{
        package: 'protractor-console',
        logLevels: ['severe']
    }]
};
