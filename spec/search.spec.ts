import { browser, by, element, Key } from "protractor";

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
    const title = await browser.getTitle();
    const isTitleStartWithCheese = title.lastIndexOf("Cheese!", 0) === 0;
    expect(isTitleStartWithCheese).toBe(true);
  });
});
