import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("toggles a todo's completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});
