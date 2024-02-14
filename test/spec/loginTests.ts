import pomPage from "../page-object/pom.page";
describe("Login tests", () => {
  it("Login, confirm login state and then logout", async () => {
    //Perform login
    await pomPage.leftMenuBtn.click();
    await pomPage.menuItemLogin.click();
    await expect(await pomPage.loginHeader).toHaveText("Login");
    await pomPage.testUserPass.click();
    await pomPage.loginBtn.click();

    //Relaunch app and verify login state
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
    await pomPage.leftMenuBtn.click();
    await pomPage.menuItemLogin.click();
    await expect(await pomPage.loginHeader).not.toExist();

    //Logout
    await pomPage.leftMenuBtn.click();
    await pomPage.menuItemLogout.click();
    await pomPage.alertConfirmBtn.click();
    await expect(await pomPage.logoutAlertTitle).toHaveText(
      "You are successfully logged out."
    );
    await pomPage.alertConfirmBtn.click();
    await expect(await pomPage.loginHeader).toHaveText("Login");
  });
});
