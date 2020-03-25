import { newE2EPage } from "@stencil/core/testing";

describe("alx-menu", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<alx-menu></alx-menu>");
    const element = await page.find("alx-menu");
    expect(element).toHaveClass("hydrated");
  });
});
