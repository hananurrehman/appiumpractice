import pomPage from "../page-object/pom.page";
describe("Cart Tests", () => {
  it("Add/delete product from cart", async () => {
    await pomPage.leftMenuBtn.click();
    await pomPage.menuItemCatalog.click();
    await pomPage.firstItem.click();
    await pomPage.addToCartBtn.click();
    await driver.execute("mobile: pressKey", { keycode: 4 });
    await driver.execute("mobile: dragGesture", {
      startX: 557,
      startY: 1972,
      endX: 552,
      endY: 906,
    });
    await driver.execute("mobile: scrollGesture", {
      left: 557,
      top: 1972,
      width: 552,
      height: 906,
      direction: "down",
      percent: 1.0,
    });
    //FIXME: Implement only 1 command to scroll
    await pomPage.lastItem.click();
    await pomPage.addToCartBtn.click();
    await pomPage.cartBtn.click();
    //await expect(await pomPage.productLabel).toHaveText("Sauce Labs Backpack");
    await $(`//android.widget.TextView[@text="My Cart"]`).waitForExist();
    const productRows = await $$(
      '//android.view.ViewGroup[@content-desc="product row"]'
    );
    const productLabel1 = await productRows[0].$(
      '//android.widget.TextView[@content-desc="product label"]'
    );
    const productLabel2 = await productRows[1].$(
      '//android.widget.TextView[@content-desc="product label"]'
    );
    console.log("Product label2: ", productLabel2);
    await expect(productLabel1).toHaveText("Sauce Labs Backpack");
    await expect(productLabel2).toHaveText("Test.allTheThings() T-Shirt");

    await expect(await pomPage.totalNumberofItems).toHaveText("2 items");
    await pomPage.removeItemBtn.click();
    await pomPage.removeItemBtn.click();
    await expect(await pomPage.noItemsText).toExist();
  });
});
