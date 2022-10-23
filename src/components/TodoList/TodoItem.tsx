import React, {useCallback, useState} from 'react';
import {ITodoTypes} from '../../recoil/todo';
import {SetterOrUpdater} from 'recoil';
import TodoModal from "../TodoModal/TodoModal";

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

const TodoItem = ({
                    id,
                    contents,
                    isCompleted,
                    onComplete,
                    onDelete,
                    todos,
                    setTodos,
                  }: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>('');

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
    // 선택한 Todo의 내용을 default value로 지정하는 작업
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }

    // Todo 업데이트 확인을 눌렀을때 객체 업데이트
    setTodos(todos.map((todo: ITodoTypes) => {
      return todo.id === id ? {...todo, contents: modifyContents} : todo;
    }));

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <>
      <div>
        <div
          title={contents}
          onClick={() => onComplete(id)}
          className={isCompleted ? "text-2xl text-red-500" : ''}
        >
          {/*{isCompleted ? `완료 ${contents}` : `${contents}`}*/}
          {contents}
        </div>

        <div>
          <button className="bg-blue-200 text-black active:bg-blue-500
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button" onClick={onModify}>수정</button>
          <button className="border-4 m-2" onClick={() => onDelete(id)}>삭제</button>
        </div>
      </div>
      {
        isModal &&
        <TodoModal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyTodo={onModifyTodo}
        />
      }
    </>
  );
};

export default TodoItem;