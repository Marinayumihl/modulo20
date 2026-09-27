import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useRecoilState(todoListState);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;