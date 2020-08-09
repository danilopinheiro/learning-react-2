import React from "react";
import Tasks from "../tasks";
import { render, fireEvent } from "@testing-library/react";

const tasks = [
  {
    id: 1,
    title: "mindfullness",
    completed: false,
  },
  {
    id: 2,
    title: "breakfast",
    completed: false,
  },
  {
    id: 3,
    title: "running",
    completed: false,
  },
];

describe("Tasks component tests", () => {
  it("render task list with text", async () => {
    const { findByTestId, findByText } = render(<Tasks tasks={tasks} />);

    //find the input
    const fieldNode = await findByTestId("form-field");

    //input the text
    const task = "running";
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
