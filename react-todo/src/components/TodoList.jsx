import { render, screen, fireEvent, waitFor } from "@testing-library/react";

test("deletes a todo", async () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Build a Todo App");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
