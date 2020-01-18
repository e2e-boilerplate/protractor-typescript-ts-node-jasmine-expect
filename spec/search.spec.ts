import { browser, by, element, ExpectedConditions, Key } from "protractor";

const url: string = "https://www.google.com/";

describe("google search", () => {
  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.get(url);
  });

  it("should be on google search page", async () => {
    const title = await browser.getTitle();
    expect(title).toEqual("Google");
  });

  it("should search for Cheese!", async () => {
    const searchBox = element(by.name("q"));
    expect(await searchBox.isDisplayed()).toBe(true);
    searchBox.sendKeys("Cheese!", Key.ENTER);
  });

  it('the page title should start with "Cheese!"', async () => {
    browser.wait(ExpectedConditions.urlContains("search"), 5000);

    const title = await browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).toBe("Cheese!");
  });
});
