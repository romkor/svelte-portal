import { render } from "@testing-library/svelte";

import TestPortalWrapper from "./TestPortalWrapper.svelte";
import TestLifecycle from "./TestLifecycle.svelte";
import { tick } from "svelte";

describe("<Portal /> target", () => {
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

describe("<Portal /> lifecycle", () => {
  let targetEl;
  let lifecycleComponent;
  beforeEach(() => {
    let { container, component } = render(TestLifecycle);
    lifecycleComponent = component;
    targetEl = container.querySelector("#modals");
  });
  it("should be added and removed from dom", async () => {
    expect(targetEl.children).toHaveLength(1);
    lifecycleComponent.$set({ modalVisible: false });
    await tick();
    expect(targetEl.children).toHaveLength(0);
    lifecycleComponent.$set({ modalVisible: true });
    await tick();
    expect(targetEl.children).toHaveLength(1);
  });
  it("should be removed from dom after after outro", async () => {
    lifecycleComponent.$set({ containerVisible: false });
    await tick();
    expect(targetEl.children).toHaveLength(1);
    await new Promise((resolve) => {
      const unsubscribe = lifecycleComponent.$on("outroend", () => {
        resolve();
        unsubscribe();
      });
    });
    expect(targetEl.children).toHaveLength(0);
  });
});
