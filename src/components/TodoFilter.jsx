import { useRecoilState } from 'recoil';
import { todoFilterState } from '../atoms/todoAtoms';

function TodoFilter() {
  const [filter, setFilter] = useRecoilState(todoFilterState);

  return (
    <div>
      <button onClick={() => setFilter('todas')}>
        Todas
      </button>

      <button onClick={() => setFilter('concluidas')}>
        Concluídas
      </button>

      <button onClick={() => setFilter('pendentes')}>
        Pendentes
      </button>
    </div>
  );
}

export default TodoFilter;