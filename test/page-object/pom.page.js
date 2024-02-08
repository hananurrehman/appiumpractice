const Page = require("./page");

class pomPage extends Page {
  get leftMenuBtn() {
    return $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    );
  }
  get menuItemCatalog() {
    return $('//android.widget.TextView[@text="Catalog"]');
  }
  get firstItem() {
    return $(
      '//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]'
    );
  }
  get addToCartBtn() {
    return $('//android.widget.TextView[@text="Add To Cart"]');
  }
  get cartBtn() {
    return $(
      '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'
    );
  }
  get productLabel() {
    return $("~product label");
  }
  get removeItemBtn() {
    return $('//android.widget.TextView[@text="Remove Item"]');
  }
  get noItemsText() {
    return $('//android.widget.TextView[@text="No Items"]');
  }
}

module.exports = new pomPage();
