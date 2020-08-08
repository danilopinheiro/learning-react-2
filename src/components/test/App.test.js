import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";

import App from "../../App";

describe("Tasks component tests", () => {
  it("Should add a new task when clicked on add button", async () => {
    //component rendering
    const { getByTestId, getByText } = render(<App />);

    //find the input
    const fieldNode = await waitForElement(() => getByTestId("form-field"));

    //input the text
    const task = "mindfullness";
    fireEvent.change(fieldNode, { target: { value: task } });
    expect(fieldNode.value).toEqual(task);

    //find and click on add button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));
    fireEvent.click(btnNode);

    //verify task added by task title
    const listNode = await waitForElement(() => getByText(task));
    expect(listNode).toBeDefined();
  });
});
