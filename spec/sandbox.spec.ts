import { browser, by, element } from "protractor";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = await element(by.css("h1")).getText();

    expect(title).toEqual("Sandbox");
    expect(header).toEqual("Sandbox");
  });
});
