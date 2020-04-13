
      
const directConnect = true;
const specs = ["spec/*.spec.ts"];
const framework = "jasmine";

const mochaOpts = {};

const onPrepare = () => {
  browser.waitForAngularEnabled(false);
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
  },
  framework,
  mochaOpts,
  onPrepare
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
      chromeOptions: {
        args: ["--headless", "--no-sandbox", "--disable-gpu"],
      },
  },
  framework,
  mochaOpts,
  onPrepare
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;    
           
exports.config = config;
