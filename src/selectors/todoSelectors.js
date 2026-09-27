import { selector } from 'recoil';
import { todoListState, todoFilterState } from '../atoms/todoAtoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(todoFilterState);

    if (filter === 'concluidas') {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === 'pendentes') {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  },
});