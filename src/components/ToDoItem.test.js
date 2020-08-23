import React from "react";
import { render } from "@testing-library/react";

import ToDoItem from "./ToDoItem";

test("renders item correct", () => {
  const item = {
    id: 8383838,
    name: "Read Documentation",
    done: false,
  };

  const { getByTestId } = render(
    <ToDoItem
      data-testid="item-name"
      id={item.id}
      key={item.id}
      name={item.name}
      done={item.done}
    />
  );

  const renderedItem = getByTestId("item-name");

  expect(renderedItem).toMatchInlineSnapshot(`
    <p
      class=""
      data-testid="item-name"
    >
      Read Documentation
    </p>
  `);
});
