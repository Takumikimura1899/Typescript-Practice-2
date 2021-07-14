import axios from 'axios';
import { useState } from 'react';
import Todo from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className='App'>
      <button onClick={onClickFetchData}>データ取得</button>
      <Text color='red' fontSize='18px'></Text>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

export default App;
