type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

const Todo = ({ title, userId, completed = false }: TodoType) => {
  const completeMark = completed ? '[完]' : '[未]';
  return (
    <div>
      <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
    </div>
  );
};

export default Todo;
