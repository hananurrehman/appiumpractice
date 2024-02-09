const pomPage = require("../page-object/pom.page");
describe("My Demo App tests", () => {
  it("This is first test", async () => {
    await pomPage.leftMenuBtn.click();
    await expect(pomPage.menuItemCatalog).toHaveText("Catalog");
  });
});

it("Add/delete product from cart", async () => {
  //await driver.executeScript("mobile: pressKey", [{ keycode: 4 }]);
  await pomPage.firstItem.click();
  await pomPage.addToCartBtn.click();
  await pomPage.cartBtn.click();
  await expect(await pomPage.productLabel).toHaveText("Sauce Labs Backpack");
  await pomPage.removeItemBtn.click();
  await expect(await pomPage.noItemsText).toExist();
});
