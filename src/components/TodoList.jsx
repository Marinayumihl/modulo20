import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';
import { filteredTodoListState } from '../selectors/todoSelectors';

function TodoList() {
  const todos = useRecoilValue(filteredTodoListState);
  const [allTodos, setAllTodos] = useRecoilState(todoListState);

  const toggleTodo = (id) => {
    setAllTodos(
      allTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {todo.text}
              </span>

              <button onClick={() => removeTodo(todo.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;