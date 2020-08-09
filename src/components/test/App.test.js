import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "../../App";

describe.skip("Tasks component tests", () => {
  it("Should add a new task when clicked on add button", async () => {
    //component rendering
    const { findByText, findByTestId } = render(<App />);

    //find the input
    const fieldNode = await findByTestId("form-field");

    //input the text
    const task = "mindfullness";
    fireEvent.change(fieldNode, { target: { value: task } });
    expect(fieldNode.value).toEqual(task);

    //find and click on add button
    const btnNode = await findByTestId("form-btn");
    fireEvent.click(btnNode);

    //verify task added by task title
    const listNode = await findByText(task);
    expect(listNode).toBeDefined();
  });
});
