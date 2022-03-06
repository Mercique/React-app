import React from "react";
import { render, screen } from "@testing-library/react";
import { ChatList } from "../chatList";

describe("ChatList component", () => {
  it("render ChatItem list", () => {
    render(<ChatList />);

    const item = screen.getByRole("list");
    expect(item).toBeInTheDocument();
  });
});
