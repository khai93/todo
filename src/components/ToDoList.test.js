import React from "react";
import { render } from "@testing-library/react";

import ToDoList from "./ToDoList";

let container = null;


test("renders message when there are no items", () => {
  const { getByText } = render(<ToDoList />);
  expect(getByText("No Items"))
});

test("renders items", () => {
  const passedState = [
    {
      id: 8383838,
      name: "Read Documentation",
      done: false,
    },
    {
      id: 838,
      name: "Come up with a new idea",
      done: false,
    },
    {
      id: 73763,
      name: "Look outside",
      done: true,
    },
  ];

  const setItems = jest.fn();
  const { getAllByTestId } = render(
    <ToDoList items={passedState} setItems={setItems} />
  );

  const renderedItems = getAllByTestId("item-name");
  const renderedNames = renderedItems.map((li) => li.textContent);

  expect(renderedNames).toMatchInlineSnapshot(`
    Array [
      "Read Documentation",
      "Come up with a new idea",
      "Look outside",
    ]
  `);
});
