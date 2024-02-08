const pomPage = require("../page-object/pom.page");
describe("My Demo App tests", () => {
  it("This is first test", async () => {
    (await pomPage.leftMenuBtn).click;
    await expect(pomPage.menuItemCatalog).toHaveText("Catalog");
    //This may seem odd but for now webdriver is unable to find this element.
    //This is evident from the fact that in the Appium inspector I was not able to select the left menu items using the "Select Elements tool"
  });

  it("Add/delete product from cart", async () => {
    await pomPage.firstItem.click();
    await pomPage.addToCartBtn.click();
    await pomPage.cartBtn.click();
    await expect(await pomPage.productLabel).toHaveText("Sauce Labs Backpack");
    await pomPage.removeItemBtn.click();
    await expect(await pomPage.noItemsText).toExist();
  });
});
