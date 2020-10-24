import { render } from "@testing-library/svelte";

import TestPortalWrapper from "./TestPortalWrapper.svelte";

describe("<Portal />", () => {
  let wrapper;

  beforeEach(() => {
    let { container } = render(TestPortalWrapper);
    wrapper = container;
  });

  it("should be rendererd in a specific HTML element", () => {
    const renderedDivInFooter = wrapper.querySelector(
      "footer #renderedInFooter"
    );

    expect(renderedDivInFooter).not.toBe(null);
  });

  it("should be rendererd in a specific HTML element with id", () => {
    const renderedDivInTargetId = wrapper.querySelector(
      "#target #renderedInTarget"
    );

    expect(renderedDivInTargetId).not.toBe(null);
  });

  it("should be rendererd in a specific HTML element with class", () => {
    const renderedDivInTargetClass = wrapper.querySelector(
      ".target #renderedInTargetClass"
    );

    expect(renderedDivInTargetClass).not.toBe(null);
  });

  it("should not render a Portal at the origin", () => {
    const portalContainer = wrapper.querySelector("#portalCtn");
    const isPortalContainerEmpty =
      portalContainer.innerHTML.trim().length === 0;

    expect(isPortalContainerEmpty).toBe(true);
  });
});
