import { newE2EPage } from "@stencil/core/testing";

describe("alx-menu-item", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<alx-menu-item></alx-menu-item>");
    const element = await page.find("alx-menu-item");
    expect(element).toHaveClass("hydrated");
  });
});
