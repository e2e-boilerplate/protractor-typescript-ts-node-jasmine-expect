const directConnect = true;
const specs = ["spec/*.spec.ts"];
const onPrepare = () => {
  require("ts-node").register({
    project: require("path").join(__dirname, "./tsconfig.json")
  });
};

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome"
  },
  onPrepare
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"]
    }
  },
  onPrepare
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
