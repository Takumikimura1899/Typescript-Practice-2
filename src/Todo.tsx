import { VFC } from 'react';
import { TodoType } from './types/todo';

const Todo: VFC<Omit<TodoType, 'id'>> = ({
  title,
  userId,
  completed = false,
}) => {
  // Pick<TodoType, 'userId' | 'title' | 'completed'>
  // Omit<TodoType, 'id'>)
  const completeMark = completed ? '[完]' : '[未]';
  return (
    <div>
      <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
    </div>
  );
};

export default Todo;
