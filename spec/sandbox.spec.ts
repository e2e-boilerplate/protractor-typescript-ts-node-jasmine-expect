import { browser, by, element, ExpectedConditions, Key } from "protractor";

const url: string = "https://e2e-boilerplates.github.io/sandbox/";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.get(url);
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    expect(title).toEqual("Sandbox");
    expect(header.getText()).toEqual("Sandbox");
  });
});
