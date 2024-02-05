describe("My Demo App tests", () => {
  it("This is first test", async () => {
    await $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    ).click();

    const menuItemCatalog = await $(
      '//android.widget.TextView[@text="Catalog"]'
    );
    await expect(menuItemCatalog).toHaveText("Catalog");
  });

  it.only("Add/delete product from cart", async () => {
    await $(
      '//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]'
    ).click();
    await $('//android.widget.TextView[@text="Add To Cart"]').click();
    await $(
      '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'
    ).click();
    expect(await $("~product label")).toHaveText("Sauce Labs Backpack");
  });
});
