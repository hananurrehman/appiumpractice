import Page from "./page";

class PomPage extends Page {
  // Login test objects
  get leftMenuBtn() {
    return $(
      '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    );
  }

  get menuItemCatalog() {
    return $('//android.widget.TextView[@text="Catalog"]');
  }

  get menuItemLogin() {
    return $("~menu item log in");
  }

  get loginBtn() {
    return $("~Login button");
  }

  get loginHeader() {
    return $('(//android.widget.TextView[@text="Login"])[1]');
  }

  get testUserPass() {
    return $('//android.widget.TextView[@text="bob@example.com"]');
  }

  get menuItemLogout() {
    return $("~menu item log out");
  }

  get alertConfirmBtn() {
    return $("id=android:id/button1");
  }

  get logoutAlertTitle() {
    return $("id=android:id/alertTitle");
  }

  // Cart test objects
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

  get totalNumberofItems() {
    return $("~total number");
  }
}

export default new PomPage();
