import { screen, expect, userEvent } from "@testing-library/user-event";

test("testing a event handler", () => {
  const btn = screen.getByRole("button");
  // user event library
  // userEvent()
  btn.expect();
});
