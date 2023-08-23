import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe(App, () => {
  it("adding a task to the list", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Enter your task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("deleting a task from the list", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("Enter your task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: "Task to delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to delete")).not.toBeInTheDocument();
  });
});
