import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoListManager from './index';

describe('TodoListManager', () => {
  it('renders initial input and add button', () => {
    const { getByPlaceholderText, getByTestId } = render(<TodoListManager />);
    
    expect(getByPlaceholderText('Enter Todo')).toBeTruthy();
    expect(getByTestId('add-todo-button')).toBeTruthy();
  });

  // Your code here

  it("adds a item to the todolist", () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<TodoListManager />);

    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');

    fireEvent.changeText(input, 'Buy groceries');
    fireEvent.press(addButton);

  
    expect(getByText('Buy groceries')).toBeTruthy();
  });

  it("removes a item to the todolist", () => {
    const { getByPlaceholderText, getByTestId, getByText, queryByText } = render(<TodoListManager />);

    const input = getByPlaceholderText('Enter Todo');
    const addButton = getByTestId('add-todo-button');

    fireEvent.changeText(input, 'Buy groceries');
    fireEvent.press(addButton);

  
    expect(getByText('Buy groceries')).toBeTruthy();

    const removeButton = getByText("Remove")

    fireEvent.press(removeButton)

    expect(queryByText('Buy groceries')).toBeNull();
  });



  });