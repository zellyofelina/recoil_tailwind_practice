import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todosState, ITodoTypes } from '../../recoil/todo';
import TodoItem from './TodoItem';

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);

  const onComplete = useCallback((id: number): void => {
    setTodos(todos.map((todo: ITodoTypes) => {
      // 매개변수로 받은 id와 같은 객체만 완료상태 업데이트
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
    }));
  }, [setTodos, todos]);

  const onDelete = useCallback((id: number) => {
    // 매개변수로 받은 id와 동일하지 않는 객체들만 필터링
    setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
  }, [setTodos, todos]);

  return (
    <div className="m-28">
      {
        todos.length > 0 ? todos.map((todo: ITodoTypes) => {
            const { id, contents, isCompleted } = todo;

            return (
              <TodoItem
                key={id}
                id={id}
                contents={contents}
                isCompleted={isCompleted}
                onComplete={onComplete}
                onDelete={onDelete}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }) :

          <div>Todo가 없습니다. 자유롭게 추가해보세요!</div>
      }
    </div>
  );
};

export default TodoList;