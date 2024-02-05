describe("First test", () => {
  it("This is first test", async () => {
    await $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    ).click();

    const menuItemCatalog = await $(
      '//android.widget.TextView[@text="Catalog"]'
    );
    await expect(menuItemCatalog).toHaveText("Catalog");
  });
});
