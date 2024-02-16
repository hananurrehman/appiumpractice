import pomPage from "../page-object/pom.page";
describe("Cart Tests", () => {
  it("Add/delete product from cart", async () => {
    await pomPage.leftMenuBtn.click();
    await pomPage.menuItemCatalog.click();
    await pomPage.firstItem.click();
    await pomPage.addToCartBtn.click();
    await pomPage.cartBtn.click();
    await expect(await pomPage.productLabel).toHaveText("Sauce Labs Backpack");
    await expect(await pomPage.totalNumberofItems).toHaveText("1 item");
    await pomPage.removeItemBtn.click();
    await expect(await pomPage.noItemsText).toExist();
  });
});
