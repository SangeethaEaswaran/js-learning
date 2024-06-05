// const { ZAP } = require('zaproxy');
import ClientApi from 'zaproxy';
// const { ZAP } = pkg;
// const ZapClient = require('zaproxy');

const zapOptions = {
//   apiKey: 'eahhr6h6kal92j21gkcnhkp80t',
  proxy: {
    // host: '127.0.0.1',
    // port: 8080,
 },
};

const zap =  ClientApi(zapOptions);
console.log('zap', zap)
async function runDAST(url) {
    try {
        // const zapOptions = {
        //     proxy: 'localhost',
        //     port: 8080,
        //     // apikey: '', // Specify your ZAP API key here
        //     // Additional options can be configured as needed
        // };

        // const zap = new ZAP(zapOptions);

        // Start ZAP API and wait until it's ready
        await zap.start();

        // Start a new session
        await zap.core.newSession();

        // Spider the target URL to discover the application's structure
        await zap.spider.scan(url);

        // Wait until the spidering is complete
        await zap.spider.complete();

        // Perform active scanning to identify vulnerabilities
        await zap.ascan.scan(url);

        // Wait until the scanning is complete
        await zap.ascan.complete();

        // Generate a report
        const report = await zap.core.htmlreport();

        // Output the report to the console
        console.log(report);

        // Shutdown ZAP
        await zap.stop();
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Example usage
const targetURL = 'https://www.wipro.com/';
runDAST(targetURL);