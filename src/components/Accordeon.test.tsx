import Accordeon from "./Accordeon";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordeon title="My title">
        <p>some content</p>
      </Accordeon>
    );
  });
  test("should show title all the time", () => {
    expect(screen.getByText("My title")).toBeDefined();
  });
  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when title is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should hide the content when title is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.doubleClick(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });
});
